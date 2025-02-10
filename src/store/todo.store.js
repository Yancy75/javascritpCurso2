import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    completed: 'Completed',
    Pending:'Pending'
} 

const state = {
    todos: [
        /*new Todo('piedra del alma'),
        new Todo('piedra del infinito'),
        new Todo('piedra del tiempo'),
        new Todo('piedra del poder'),
        new Todo('piedra del realidad'),*/
    ],
    filter: Filters.All,
}

const initStore = () => {
    /* confirma la que la constante filters y state esten cargadas */
    if (!loadStore()){ 
        for(let i=0;i<5;i++){state.todos.push(new Todo(`Piedra del Vacio: ${i}`));}/* si no existe la variable local la rellena */
        state.filter = Filters.All;}
    //console.log(loadStore());   
}
const loadStore = () =>{
    if (localStorage.getItem('estado')) { 
       /* para asignarlo haremos una descomposicion state es una variable pero sus componenetes internos no lo son */ 
        const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('estado'));
        state.todos = todos;
        state.filter = filter;  
        return true;  /* si logro hacer la operacion */
    } 
    return false; /* no logro hacer la operacion */
    
}
const grabarLocalStorace = () => {
   /// localStorage.setItem('estado', 'hola mundo');/* primer valor es la clave puede ser cualquier cosa es solo un identificador*/
       localStorage.setItem('estado', JSON.stringify(state));
}
/**
 * @param{string} descripcion
 */
const addTodo = (descripcion) => {
    if (!descripcion) { throw new Error('se necesita la descripcion'); }
    state.todos.push(new Todo(descripcion));    
    grabarLocalStorace();
}
const toggleTodo = (todoId) => {
    /* el comando map en el arreglo tiene la misma funcionque el for recorrera todo el arreglo 
    depositando su valos en este caso en la variable todo(no confundir con la variable interna de constante) cambia esa unica variable */
    // console.log(todoId);
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
             }
         return todo;/* este retunr es del map si no se coloca debuelve indefinido */
    });
    grabarLocalStorace();
}
const deleteTodo = (todoId) => {
    /*filter es una propiedad de los array en javascritp  en este caso devuelve un arreglo completo pero sin el valos que le mandamos*/
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    grabarLocalStorace();
}
const deleteCompleted = () => {
    /* todo es la variable interna donde buscamos los elementos uno a uno y le decimos que sea igual a false tambien puedes hacer comparativas
    pero al no poner nada contra que comparar el solo devuelve nada */
    state.todos = state.todos.filter(todo => !todo.done);
    grabarLocalStorace();
}
const setFilter = (newFilter = Filters.All) => {
    /*validar los filtros */
    let busqueda = Object.values(Filters);
      if (busqueda.find((elemento) => elemento === newFilter)) {state.filter = newFilter;
      } else { throw new Error(`El filtro debe existir ${newFilter}`); }
    grabarLocalStorace();
}
const getCurrentFilter = () => {
    return state.filter; 
}
const getTodo = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All: return [...state.todos];
        case Filters.completed: return state.todos.filter(todo => todo.done);
        case Filters.Pending: return state.todos.filter(todo => !todo.done);
        default: throw new (`opcion ${filter} no es valido`);
    }
}
/* se puede tener mas de una exportacion y con diferentes metodos */
/*export const todoStore ={
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodo
}*/
/* exportacion de default */
export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodo,
    Filters,
    state,
}