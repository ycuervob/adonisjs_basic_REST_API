# API REST de AdonisJS y PostgreSQL

Este repositorio contiene la implementación de una API REST en AdonisJS que utiliza PostgreSQL como base de datos.

# Configuración

Para configurar y ejecutar la API, siga los siguientes pasos:

Clone el repositorio en su máquina local usando el comando git clone **<URL del repositorio>**.
Ejecute **npm install** para instalar todas las dependencias necesarias.
Configure la base de datos en el archivo **.env** y ejecute las migraciones con el comando **node ace migration:run**.
Ejecute la aplicación con el comando **npm start**.

# Rutas

La API tiene las siguientes rutas disponibles:

* GET /: devuelve un objeto JSON con un mensaje de saludo.

* GET /alcaldia/listar-usuarios: devuelve un arreglo de objetos JSON con la información de todos los usuarios registrados en la base de datos.

* GET /alcaldia/listar-todo: devuelve un arreglo de objetos JSON con toda la información de los usuarios registrados en la base de datos.

* GET /alcaldia/listar-perfil: devuelve un arreglo de objetos JSON con la información de todos los usuarios y sus respectivos perfiles registrados en la base de datos.

* GET /alcaldia/listar-publicaciones: devuelve un arreglo de objetos JSON con la información de todos los usuarios y sus respectivas publicaciones registradas en la base de datos.

* GET /alcaldia/listar-usuarios-grupos: devuelve un arreglo de objetos JSON con la información de todos los usuarios y sus respectivos grupos registrados en la base de datos.

* GET /alcaldia/buscar-por-id/:id: devuelve un objeto JSON con la información del usuario que corresponde al ID proporcionado en la ruta.

* GET /alcaldia/filtrar-por-nombre/: devuelve un arreglo de objetos JSON con la información de todos los usuarios cuyo nombre coincide con el término proporcionado en la ruta.

* DELETE /alcaldia/eliminar-usuario/:id: elimina de la base de datos el usuario que corresponde al ID proporcionado en la ruta.

* POST /alcaldia/registro-usuario: registra un nuevo usuario en la base de datos. Se espera que la solicitud tenga un cuerpo en formato JSON que contenga la información del nuevo usuario.

* POST /alcaldia/registro-perfil: registra un nuevo perfil en la base de datos. Se espera que la solicitud tenga un cuerpo en formato JSON que contenga la información del nuevo perfil.

* POST /alcaldia/registro-publicacion: registra una nueva publicación en la base de datos. Se espera que la solicitud tenga un cuerpo en formato JSON que contenga la información de la nueva publicación.

* POST /alcaldia/registro-grupo: registra un nuevo grupo en la base de datos. Se espera que la solicitud tenga un cuerpo en formato JSON que contenga la información del nuevo grupo.

* POST /alcaldia/registro-usuario-grupo: registra un nuevo usuario en un grupo en la base de datos. Se espera que la solicitud tenga un cuerpo en formato JSON que contenga la información del nuevo usuario en el grupo.

* PUT /alcaldia/actualizar-usuario/:id: actualiza la información del usuario que corresponde al ID proporcionado en la ruta. Se espera que la solicitud tenga un cuerpo en formato JSON que contenga la información actualizada del usuario.
