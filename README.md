## Instructions

para correr la app se devén descargar los archivos node y los archivos de react incluir los node-modules en ambos proyectos y correr los siguientes comandos:

React: npm run start
node: node index

## details front

la sección del papa ocupa la pantalla inicial utilizando el 100 del view port heigh, la siguente sección utiliza un hook para ocultare cuando se presiona la x. 
la sección de los votos utiliza un display grid el cual se puede cambiar para el responsive

## how i could complete the chalenge

Para el responsive utilizaria react-responsive para ocultar algunos componentes y CSS media queries para cambiar la dispocicion de la grilla, adicional mente utilizaría redux para hacer las votaciones y almacenar el JWT de la autenticacion.

para hacer los links a otras paginas, crearia los componentes e incluiria estas nuevas rutas en el BrowserRouter.

para la seccion de votos utilizaria un operador ternario que dependa de un stado boolean, asi podría alternar entre "vote again" y "vote now". después de esto enviaría los votos al api REST del back y confirmaría con el token cuantos votos ha realizado, si la respuesta es que supero los 3 votos devolvería un error y este lo capturaría seteando una variable en mi rudex state.

para manejar los porcentajes utilizaría un reducer el cual conectaría al componente cambiaría el width de los divs adicional-mete cambiaría los textos de la misma manera.

## how i could complete the chalenge

Para el responsive utilizaria react-responsive para ocultar algunos componentes y CSS media queries para cambiar la disposición de la grilla, adicionalmente utilizaria redux para hacer las votaciones y almacenar el JWT de la autenticacion.

para hacer los links a otras paginas, crearia los componentes e incluiria estas nuevas rutas en el BrowserRouter.

para la seccion de votos utilizaria un operador ternario que dependa de un stado boolean, asi podria alternar entre "vote again" y "vote now". despues de esto enviaria los votos al api REST del back y confirmaria con el token cuantos votos ha realizado, si la respuesta es que supero los 3 votos devolveria un error y este lo capturaria seteando una variable en mi rudex state.

para manejar los porcentajes utilizaria un reducer el cual conectaria al componente cambiaria el width de los divs adicionalmete cambiaria los textos de la misma manera.




