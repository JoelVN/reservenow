import {
    BadRequestException,
    Body,
    Controller,
    Get,
    InternalServerErrorException,
    NotFoundException,
    Param,
    Post,
    Query,
    Res,
} from '@nestjs/common';
import { MembresiaService } from "./membresia.service";
import { validate, ValidationError } from 'class-validator';
import { MembresiaEntity } from './membresia.entity';
import { MembresiaCreateDTO } from './dto/membresia.create-dto';

@Controller('membresia')
export class MembresiaController {
    constructor(
        private readonly _membresiaService: MembresiaService
    ) {
    }

    @Get('vista/membresia')
    async membresia(
      @Res() res,
      @Query() parametrosConsulta
    ) {
        let resultadoEncontrado
        try {
            resultadoEncontrado = await this._membresiaService.buscarTodos(parametrosConsulta.busqueda);
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException('Error encontrando membresias')
        }
        if (resultadoEncontrado) {
            res.render(
              'membresia/membresia.inicio.ejs',
              {
                  arregloMembresias: resultadoEncontrado,
                  parametrosConsulta: parametrosConsulta
              });
        } else {
            throw new NotFoundException('No se encontraron membresias')
        }
    }


    @Get('vista/crear')
    crearMembresiaVista(
      @Query() parametrosConsulta,
      @Res() res
    ) {

        return res.render('membresia/membresia.crear.ejs', {
            error: parametrosConsulta.error,
            inicia: parametrosConsulta.inicia,
            finaliza: parametrosConsulta.finaliza,
            estado: parametrosConsulta.estado,
        })

    }

    @Get('vista/editar/:idMembresia') // Controlador
    async editarHorarioVista(
      @Query() parametrosConsulta,
      @Param() parametrosRuta,
      @Res() res
    ) {
        const idMembresia = Number(parametrosRuta.idMembresia)
        let membresiaEncontrada;
        try {
            membresiaEncontrada = await this._membresiaService.buscarUno(idMembresia);
        } catch (error) {
            console.error('Error del servidor');
            return res.redirect('/membresia/vista/membresia?mensaje=Error buscando membresia');
        }
        if (membresiaEncontrada) {
            return res.render(
              'membresia/membresia.crear.ejs',
              {
                  error: parametrosConsulta.error,
                  membresia: membresiaEncontrada,
              }
            )
        } else {
            return res.redirect('/membresia/vista/membresia?mensaje= membresia no encontrada');
        }

    }

    @Post('crearDesdeVista')
    async crearDesdeVista(
      @Body() parametrosCuerpo,
      @Res( ) res,
    ) {
        //validar dto
        const membresiaValida = new MembresiaCreateDTO();
        membresiaValida.inicia = parametrosCuerpo.inicia;
        membresiaValida.finaliza = parametrosCuerpo.finaliza;
        membresiaValida.estado= parametrosCuerpo.estado;

        let respuestaCreacionMembresia;
        try {
            const errores: ValidationError[] = await validate( membresiaValida );
            if (errores.length > 0) {
                console.error( 'Error', errores );
                throw new BadRequestException( 'Error Validando Datos' )
            } else {
                //lo qu pasa cuando valida los datos

                respuestaCreacionMembresia = await this._membresiaService.crearUno( parametrosCuerpo )

            }

        } catch (error) {
            console.error( error );
            const mensajeError = 'Error creando membresia'
            return res.redirect( '/membresia/vista/crear?error=' + mensajeError )
        }
        if (respuestaCreacionMembresia) {
            return res.redirect( '/membresia/vista/membresia' );
        } else {
            const mensajeError = 'Error creando membresia'
            return res.redirect( '/membresia/vista/crear?error=' + mensajeError )
        }
    }


    @Post('editarDesdeVista/:idMembresia')
    async editarDesdeVista(
      @Param() parametrosRuta,
      @Body() parametrosCuerpo,
      @Res() res,
    ) {
        const agendaEditada = {
            idMembresia: Number(parametrosRuta.idMembresia),
            inicia: parametrosCuerpo.inicia,
            finaliza: parametrosCuerpo.finaliza,
            estado: parametrosCuerpo.estado,

        } as MembresiaEntity;
        try {
            await this._membresiaService.editarUno(agendaEditada);
            return res.redirect('/membresia/vista/membresia?mensaje= membresia editada');
        }catch (error) {
            console.error(error);
            return res.redirect('/membresia/vista/membresia?mensaje= Error Editando membresia');
        }

    }

    @Post('eliminarDesdeVista/:idMembresia')
    async eliminarDesdeVista(
      @Param() parametrosRuta,
      @Res() res
    ){
        try {
            const idMembresia = Number(parametrosRuta.idMembresia);
            await this._membresiaService.eliminarUno(idMembresia)
            return res.redirect('/membresia/vista/membresia?mensaje= membresia Eliminada')
        } catch (error) {
            console.log(error);
            return res.redirect('/membresia/vista/membresia?mensaje= Error eliminando membresia')

        }
    }
    


}