/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.group(() => {
  Route.get('/listar-usuarios', 'UsuariosController.getListarUsuarios');
  Route.get('/listar-todo', 'UsuariosController.getListarUsuariosTodo');
  Route.get('/listar-perfil', 'UsuariosController.getListarUsuariosYPerfil');
  Route.get ('/listar-publicaciones', 'UsuariosController.getListarUsuariosyPublicaciones');
  Route.get('/listar-usuarios-grupos', 'UsuariosController.getListarUsuariosGrupos');
  Route.get('/buscar-por-id/:id', 'UsuariosController.buscarPorId');
  Route.get('/filtrar-por-nombre/', 'UsuariosController.filtroPorNombre');
  
  Route.delete('/eliminar-usuario/:id', 'UsuariosController.eliminarUsuario');

  Route.post('/registro-usuario', 'UsuariosController.setRegistrarUsuario');
  Route.post('/registro-perfil', 'PerfilesController.setRegistrarPerfil');
  Route.post('/registro-publicacion', 'PublicacionesController.setRegistrarPublicacion');
  Route.post('/registro-grupo', 'GruposController.setRegistrarGrupo');
  Route.post('/registro-usuario-grupo', 'UsuariosGruposController.setRegistrarUsuarioGrupo');

  Route.put('/actualizar-usuario/:id', 'UsuariosController.actualizarUsuario');
  
}).prefix('alcaldia')
