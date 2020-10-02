import {
  BadRequestException,
  Body,
  Controller, Delete,
  Get,
  InternalServerErrorException, NotFoundException,
  Param,
  Post,
  Put, Query, Res,
} from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioCreateDto } from './dto/horario.create-dto';
import { validate, ValidationError } from 'class-validator';
import { HorarioEntity } from './horario.entity';

@Controller('horario')
export class HorarioController {

  constructor(
    private readonly _horarioService: HorarioService,
  ){}

  @Get()
  async mostrarTodos(){
    try {
      const respuesta = await this._horarioService.buscarTodos();
      return respuesta;
    } catch (e) {
      console.error(e)
      throw new InternalServerErrorException({
        mensaje: 'Error del servidor',
      })

    }


    //return this.arregloUsuarios
  }

  @Post()
  async crearUno(
    @Body() parametrosCuerpo
  ){

    try {
      const repuesta = await this._horarioService.crearUno(parametrosCuerpo);
      return repuesta;
    } catch (e) {
      console.error(e);
      throw new BadRequestException({
        mensaje: 'Error validando datos'
      });

    }
  }

  @Get(':id')
  async verUno(
    @Param() parametrosRuta
  ){

    let respuesta;
    try {
      respuesta = await this._horarioService
        .buscarUno(Number(parametrosRuta.id));
    } catch (e) {
      console.error(e)
      throw new InternalServerErrorException({
        mensaje: 'Error del servidor',
      })
    }

    if (respuesta){
      return respuesta
    }else {
      throw new NotFoundException({
        mensaje: 'No existen registros',
      })
    }
  }

  @Put(':id')
  async editarUno(
    @Param() parametrosRuta,
    @Body() parametrosCuerpo
  ){
    const id = Number(parametrosRuta.id);
    const usuarioEditado = parametrosCuerpo;
    usuarioEditado.id= id;

    try {
      console.log('usuarioEditado', usuarioEditado)
      const repuesta = await this._horarioService.editarUno(usuarioEditado);
      return repuesta;
    } catch (e) {
      console.error(e);
      throw new BadRequestException({
        mensaje: 'Error del servidor'
      });

    }





  }

  @Delete(':id')
  async eliminarUno(
    @Param() parametrosRuta
  ){

    const id = Number(parametrosRuta.id);
    try {
      const repuesta = await this._horarioService.eliminarUno(id);
      return {mensaje: 'Registro con id: '+ id + 'eliminado'};
    } catch (e) {
      console.error(e);
      throw new BadRequestException({
        mensaje: 'Error del servidor'
      });

    }



  }





  @Get('vista/agendar')
  async agendar(
    @Res() res,
    @Query() parametrosConsulta
  ) {
    let resultadoEncontrado
    try {
      resultadoEncontrado = await this._horarioService.buscarTodos(parametrosConsulta.busqueda);
    } catch (error) {
      throw new InternalServerErrorException('Error encontrando Horarios')
    }
    if (resultadoEncontrado) {
      res.render(
        'horario/agendar.ejs',
        {
          arregloHorarios: resultadoEncontrado,
          parametrosConsulta: parametrosConsulta
        });
    } else {
      throw new NotFoundException('No se encontraron horarios')
    }
  }


  @Get('vista/crear')
  crearAgendaVista(
    @Query() parametrosConsulta,
    @Res() res
  ) {

    return res.render('horario/crear.agenda.ejs', {
      error: parametrosConsulta.error,
      hora_inicio: parametrosConsulta.hora_inicio,
      hora_final: parametrosConsulta.hora_final,
      dia: parametrosConsulta.dia,
      })

  }

  @Get('vista/editar/:id') // Controlador
  async editarHorarioVista(
    @Query() parametrosConsulta,
    @Param() parametrosRuta,
    @Res() res
  ) {
    const id = Number(parametrosRuta.id)
    let horarioEncontrado;
    try {
      horarioEncontrado = await this._horarioService.buscarUno(id);
    } catch (error) {
      console.error('Error del servidor');
      return res.redirect('/horario/vista/inicio?mensaje=Error buscando horario');
    }
    if (horarioEncontrado) {
      return res.render(
        'horario/crear.agenda.ejs',
        {
          error: parametrosConsulta.error,
          horario: horarioEncontrado,
        }
      )
    } else {
      return res.redirect('/horario/vista/inicio?mensaje= horario no encontrado');
    }

  }

  @Post('crearDesdeVista')
  async crearDesdeVista(
    @Body() parametrosCuerpo,
    @Res( ) res,
  ) {
    //validar con un rico dto
    const horarioValido = new HorarioCreateDto();
    horarioValido.hora_inicio = parametrosCuerpo.hora_inicio;
    horarioValido.hora_final = parametrosCuerpo.hora_final;
    horarioValido.dia = parametrosCuerpo.dia;

    let respuestaCreacionUsuario;
    try {
      const errores: ValidationError[] = await validate( horarioValido );
      if (errores.length > 0) {
        console.error( 'Error', errores );
        throw new BadRequestException( 'Error Validando Datos' )
      } else {
        //lo qu pasa cuando valida los datos

        respuestaCreacionUsuario = await this._horarioService.crearUno( parametrosCuerpo )

      }

    } catch (error) {
      console.error( error );
      const mensajeError = 'Error agendando'
      return res.redirect( '/horario/vista/crear?error=' + mensajeError )
    }
    if (respuestaCreacionUsuario) {
      return res.redirect( '/horario/vista/agendar' );
    } else {
      const mensajeError = 'Error agendando'
      return res.redirect( '/horario/vista/crear?error=' + mensajeError )
    }
  }


  @Post('editarDesdeVista/:id')
  async editarDesdeVista(
    @Param() parametrosRuta,
    @Body() parametrosCuerpo,
    @Res() res,
  ) {
    const agendaEditada = {
      id: Number(parametrosRuta.id),
      hora_inicio: parametrosCuerpo.hora_inicio,
      hora_final: parametrosCuerpo.hora_final,
      dia: parametrosCuerpo.dia,

    } as HorarioEntity;
    try {
      await this._horarioService.editarUno(agendaEditada);
      return res.redirect('/horario/vista/agendar?mensaje= Agenda editada');
    }catch (error) {
      console.error(error);
      return res.redirect('/horario/vista/agendar?mensaje= Error Editando Agenda');
    }

  }

  @Post('eliminarDesdeVista/:id')
  async eliminarDesdeVista(
    @Param() parametrosRuta,
    @Res() res
  ){
    try {
      const id = Number(parametrosRuta.id);
      await this._horarioService.eliminarUno(id)
      return res.redirect('/horario/vista/agendar?mensaje= Agenda Eliminada')
    } catch (error) {
      console.log(error);
      return res.redirect('/horario/vista/agendar?mensaje= Error eliminando Agenda')

    }
  }

}