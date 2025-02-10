import './style.css'
import { App } from './todos/app';
import todoStore from  './store/todo.store'; /* estoy exportando una todo lo que esta en el default completa de todo lo que hay en el archivo puedo usar cualquier nombre para nombrarlo*/
//import { todoStore as pene } from  './store/todo.store'; /* estoy exportando con una constante ya declarada*/

/* no es por divercion yo llamo al initstore para ver si existe algo en mi variable store del navegados (esto tambien seirve para variables de sesion) si existe que lo muestre  */
todoStore.initStore();
/* aqui le digo donde va a dibuejar todo lo que se necesita */
App('#app');

/*todoStore.setFilter('Pending')*/
/*todoStore.deleteCompleted();
pene.deleteCompleted();
console.log('despues del borrado');
todoStore.initStore();
console.log('hola mundo');*/