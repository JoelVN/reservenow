import {Body, Controller, Get, InternalServerErrorException, Post, Query, Res, Session} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly _usuarioService: UsuarioService
    ) {
    }
    @Get('login')
    rutaLogin(
        @Res() response
    ){
        return response.render('usuario/login')
    }

    @Post('login')
    async loginPost(
        @Body() parametrosConsulta,
        @Res() response,
        @Session() session
    ){
        const nombreUsuario = parametrosConsulta.usuario;
        const password = parametrosConsulta.password;
        if(nombreUsuario == 'admin@reservenow.com' && password =='1234'){
            session.usuario = {
                nombre:'Administrador',
                userId: 0,
                roles: ['Administrador'],
            };
            let mensaje = "Bienvenido Administrador";
            return response.render('principal/principal',{
                datos: {
                    mensaje,
                }
            })
        }else{

            let consultaServicio;
            consultaServicio = [{
                correo: nombreUsuario,
            }];
            let usuario;
            try{
                usuario = await this._usuarioService.buscarUno(consultaServicio)
            }catch(e){
                console.log('nopeBuscarUno')
                throw new InternalServerErrorException('Usuario no encontrado')
            }
            if(usuario){
                if(usuario.password == password){
                    session.usuario = undefined;
                    session.usuario={
                        nombre: usuario.correo,
                        userId: usuario.idUsuario,
                        roles : ['Deportista'],
                    };
                    let mensaje = "Bienvenido " + usuario.nombreUsuario + " " + usuario.apellidoUsuario;
                    return response.render('principal/principal',{
                        datos: {
                            mensaje,
                        }
                    })
                }
            }
        }
    }



    @Get('login/verificar')
    async login(
        @Query ('consultaUsuario') consultaUsuario: string,
        @Res() res,
        @Session() session,
    ){
        const consulta = {
            idUsuario: session.usuario.userId,
        };
        let arregloUsuario;
        try{
            arregloUsuario = await this._usuarioService.buscarUno(consulta);
            res.render(
                'principal/principal',{
                    datos: {usuario:arregloUsuario}
                },
            );
        }catch (e) {
            console.log('nope')
            throw new InternalServerErrorException('Usuario no encontrado')
        }
    }

    /*@Post('login')
    loginPost(
        @Body() parametrosConsulta,
        @Res() response,
        @Session() session
    ){
        const usuario = parametrosConsulta.usuario;
        const password = parametrosConsulta.password;
        if(usuario == 'admin@reservenow.com' && password =='12345678'){
            session.usuario = usuario
            session.roles = ['Administrador']
            return response.redirect('/usuario/vista/principal')
        }else{
            return response.redirect('login')
        }
    }*/




    @Get('vista/principal')
    async principal(
    @Res() res,
    @Query() parametrosConsulta
    ){
        let resultadoUsuario

    }


}