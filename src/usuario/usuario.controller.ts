import {Body, Controller, Get, InternalServerErrorException, Post, Query, Res, Session} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioCreateDto} from "./dto/usuario.create-dto";
import {validate, ValidationError} from "class-validator";

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

    @Get('atras')
    atras(
      @Res() response
    ){
        return response.render('principal/principal',{
            datos: {
                Session,
            }
        })
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
                            session
                        }
                    })
                }
            }
        }
    }

    @Get('logout')
    logout(
        @Session() session,
        @Res() res,
    ) {
        session.usuario = undefined;
        res.render('usuario/login',          {
            datos: {
            },
        },);
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

    @Get('registro')
    rutaRegistro(
        @Query('error') error: string,
        @Res() res,
    ) {
        res.render(
            'usuario/register',
            {
                datos: {
                    error,
                },
            },
        );
    }

    @Post('registerUsuarioVista')
    async crearUnUsuario(
        @Body() usuario: UsuarioEntity,
        @Res() res,
    ){
        const usuarioCreateDTO = new UsuarioCreateDto();
        usuarioCreateDTO.nombreUsuario = usuario.nombreUsuario;
        usuarioCreateDTO.apellidoUsuario = usuario.apellidoUsuario;
        usuarioCreateDTO.cedulaUsuario = usuario.cedulaUsuario;
        usuarioCreateDTO.correo= usuario.correo;
        usuario.rolUsuario = "Cliente";
        usuarioCreateDTO.rolUsuario = usuario.rolUsuario;
        usuarioCreateDTO.password = usuario.password;

        const errores: ValidationError[] = await validate(usuarioCreateDTO);
        if(errores.length>0){
            console.log('Error', errores);
            const mensajeError = 'Error Datos incorrectos'
            return res.redirect('/usuario/registro?error=' + mensajeError);
        }else{
            try {
                await this._usuarioService
                    .crearUno(
                        usuario,
                    );
                res.redirect(
                    '/usuario/login?mensaje=El usuario se creo correctamente',
                );
            } catch (error) {
                const mensajeError = 'Error del servidor'
                return res.redirect('/usuario/registro?error=' + mensajeError);
            }
        }

    }








}