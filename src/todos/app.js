/**
 * @param {string} elementId
 */
/* asi cargamos un archivo completo de html lo imporrtante es el signo de interrogacion y la palabra raw */
import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { construtoPantalla } from './use-cases';

/* biblioteca de elementos */
const ElementsIDs = {
    TodoList: '.todo-list',
    newTodoinput: '#new-todo-input',
}
/* fin de biblioteca de elementos */

export const App = (elementId) => {
    
    const mostrarPantalla = () => {
       const entrada = todoStore.getTodo();
        //console.log(entrada);
        construtoPantalla(ElementsIDs.TodoList, entrada);
    }

    //cuando app se llamada usaremos una funcion autocargada (es como el domcument ready)
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        mostrarPantalla();
    })();    

    //referencias HTML
    const nuevoDescripcionInput = document.querySelector(ElementsIDs.newTodoinput);
    const todoListUl = document.querySelector(ElementsIDs.TodoList);
    
    // eventos de listener
    nuevoDescripcionInput.addEventListener('keyup', (event) => {
        console.log(event.keyCode);
        if (event.keyCode !== 13) { return }; /* entrara aqui para todos los valores que no sea enter  */
        if (event.target.value.trim().length === 0) return;  /* si esta vacio ineficientemente no hace nada y se sale */

        todoStore.addTodo(event.target.value);
        mostrarPantalla();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', (event) => {
        //console.log(event.target);/*  con esto obtengo el elemento al que estoy dando click aun de forma interna*/
        const Elemli = event.target.closest('[data-id]');
        const Id = Elemli.getAttribute('data-id');
        //console.log(Elemli.getAttribute('data-id'));/* tengo el atributo buscado */        
        if (event.target.getAttribute('class') === "destroy") {
               todoStore.deleteTodo(Id);/* aqui lo borro */
           } else {
               todoStore.toggleTodo(Id); /* aqui lo tacho */
           }
         mostrarPantalla();
    });

    /* todoListUl.addEventListener('click', (event) => {
       // console.log(event.target);/*  con esto obtengo el elemento al que estoy dando click aun de forma interna*/
       /*  const Elemli = event.target.closest('[data-id]');
         const parado = event.target.className ==='destroy';
         console.log(parado);
        //console.log(Elemli.getAttribute('data-id'));/* tengo el atributo buscado */
       /* todoStore.toggleTodo(Elemli.getAttribute('data-id'));
         mostrarPantalla();*/
   /* });*/


} 

