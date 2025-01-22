import './style.css'
import { App } from './todos/app';
import todoStore from './store/todo.store'; // estoy exportando una clase completa de todo lo que hay en el archivo

todoStore.initStore();
App('#app');
//console.log('hola mundo');