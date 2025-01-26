import './style.css'
import { App } from './todos/app';
import todoStore from  './store/todo.store'; /* estoy exportando una todo lo que esta en el default completa de todo lo que hay en el archivo puedo usar cualquier nombre para nombrarlo*/
//import { todoStore as pene } from  './store/todo.store'; /* estoy exportando con una constante ya declarada*/

/*todoStore.initStore();*/
App('#app');

/*todoStore.setFilter('Pending')*/
/*todoStore.deleteCompleted();
pene.deleteCompleted();
console.log('despues del borrado');
todoStore.initStore();
console.log('hola mundo');*/