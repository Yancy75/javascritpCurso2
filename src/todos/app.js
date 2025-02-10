/**
 * @param {string} elementId
 */
/* asi cargamos un archivo completo de html lo imporrtante es el signo de interrogacion y la palabra raw */
import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { construtoPantalla, textoCapital, contadorTodo } from './use-cases';


/* biblioteca de elementos */
const ElementsIDs = {
    TodoList: '.todo-list',
    newTodoinput: '#new-todo-input',
    clearCompleted: '.clear-completed',
    filtros: '.filtro',
    pendingCount:'#pending-count',
}
/* fin de biblioteca de elementos */

export const App = (elementId) => {
    
    const mostrarPantalla = () => {
       const entrada = todoStore.getTodo(todoStore.getCurrentFilter());
        /* reconstrulle la pantalla completa y los contadores incluidos */
        construtoPantalla(ElementsIDs.TodoList, entrada);
        if (!contadorTodo(ElementsIDs.pendingCount, todoStore.getTodo())) { throw new Error(`Ocurrio un error en el contador`); }             
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
    const borrarTodo = document.querySelector(ElementsIDs.clearCompleted)
    const filtros = document.querySelectorAll(ElementsIDs.filtros);
    // eventos de listener
    
    nuevoDescripcionInput.addEventListener('keyup', (event) => {
       // console.log(event.keyCode);
        if (event.keyCode !== 13) { return }; /* entrara aqui para todos los valores que no sea enter  */
        if (event.target.value.trim().length === 0) return;  /* si esta vacio ineficientemente no hace nada y se sale */

        //funcion capital;
        todoStore.addTodo(textoCapital(event.target.value));
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

    borrarTodo.addEventListener('click', (event)=>{
        todoStore.deleteCompleted();
        mostrarPantalla();
    });

  /* efecto de los filtros el movimiento de malcado */
    filtros.forEach(filtron =>{
        filtron.addEventListener('click', (filtron) =>{
            /*cuando no le digo target es para que afecte a todos los elementos del arreglo que es filtros */
            filtros.forEach(fil =>  fil.classList.remove('selected'))
            filtron.target.classList.add('selected');
            
            switch(filtron.target.innerHTML){
                case 'Todos': todoStore.setFilter(todoStore.Filters.All);
                               break;
                case 'Pendientes': todoStore.setFilter(todoStore.Filters.Pending); 
                                    break;
                case 'Completados': todoStore.setFilter(todoStore.Filters.completed);
                                     break;
            }
            mostrarPantalla();
        });
    });
    /*filtros.addEventListener('click', (event) =>{
        console.log('le di');
    });*/

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

