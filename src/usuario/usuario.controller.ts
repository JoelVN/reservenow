import {Body, Controller, Get, Post, Res, Session} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Controller('usuario-rn')
export class UsuarioController {
    constructor(
        private readonly _usuarioService: UsuarioService
    ) {
    }

    @Get('login')
    login(
        @Res() response
    ){
        return response.render('usuario/login')
    }

    @Post('login')
    loginPost(
        @Body() parametrosConsulta,
        @Res() response,
        @Session() session
    ){
        const usuario = parametrosConsulta.usuario;
        const password = parametrosConsulta.password;
        if(usuario == 'adrian@epn.com' && password =='1234'){
            session.usuario = usuario
            session.roles = ['Administrador']
            return response.redirect('/libro/vista/principal')
        }else{
            return response.redirect('usuario/login')
        }
    }


}