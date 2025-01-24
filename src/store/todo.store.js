import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    completed: 'Completed',
    Pending:'Pending'
} 

const state = {
    todos: [
        new Todo('piedra del alma'),
        new Todo('piedra del infinito'),
        new Todo('piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('inicion de la puta mierda');
}
const loadStore = () =>{
    throw new('Not implemented'); 
}
/**
 * @param{string} descripcion
 */
const addTodo = (descripcion) => {
    if (!descripcion) { throw new Error('se necesita lla descripcion'); }
    state.todos.push(new todo(descripcion));    
}
const toggleTodo=(todoId) =>{
    throw new ('Not implemented');
}
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);/*filter es una propiedad de los array en javascritp */
}
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
}
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}
const getCurrentFilter = () => {
    throw new ('Not implemented');    
}
const getTodo = (filter = Filters.all) => {
    switch (filter) {
        case Filters.all: return [...state.todos];
        case Filters.completed: return state.todos.filter(todo => todo.done);
        case Filters.Pending: return state.todos.filter(todo => !todo.done);
        default: throw new (`opcion ${filter} no es valido`);
    }
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
}