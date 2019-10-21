## Instructions

para correr la app se devén descargar los archivos node y los archivos de react incluir los node-modules en ambos proyectos y correr los siguientes comandos:

React: npm run start
node: node index

## libreries

React
axios: para realizar las consultas http
react-router-dom: para manejar las rutas como una SPA
redux, redux-thunk y react-redux: para manejar un store 
webfontloader: para importar las fuentes

node:
body-parse: para manejar los abjetos de las consultas http
cors: para evitar conflictos de CORS en el ambiente de desarrollo local host
express: para manejar las rutas de las peticiones http
mariadb: para realizar el CRUD de la base de datos (no se implemento pero se dejo comentado el middleware de la BD, con el fi de que funcionara se utilizo un mock)

## details back

para el back se utilizo express para manejar las rutas de las consultas y body-parse para manejar los objetos de dichas consultas, se implemento un middleware para manejar el CRUD a la base de datos y se pretendia utilizar una autenticacion por medio de un JWT utilizando express-session.

## details front

la sección del papa ocupa la pantalla inicial utilizando el 100 del view port heigh, la siguente sección utiliza un hook para ocultare cuando se presiona la x. 
la sección de los votos utiliza un display grid el cual se puede cambiar para el responsive

## how i could complete the chalenge

Para el responsive utilizaria react-responsive para ocultar algunos componentes y CSS media queries para cambiar la disposición de la grilla, adicionalmente utilizaria redux para hacer las votaciones y almacenar el JWT de la autenticacion.

para hacer los links a otras paginas, crearia los componentes e incluiria estas nuevas rutas en el BrowserRouter.

para la seccion de votos utilizaria un operador ternario que dependa de un stado boolean, asi podria alternar entre "vote again" y "vote now". despues de esto enviaria los votos al api REST del back y confirmaria con el token cuantos votos ha realizado, si la respuesta es que supero los 3 votos devolveria un error y este lo capturaria seteando una variable en mi rudex state.

para manejar los porcentajes utilizaria un reducer el cual conectaria al componente cambiaria el width de los divs adicionalmete cambiaria los textos de la misma manera.




