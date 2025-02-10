import { Todo } from '../models/todo.model';

/**
 * 
 * @param {Todo} todo 
 */
/* modificamos el contador cada ves que se reconstruye la pantalla */
export const contadorTodo = (ElementsID, Todos = []) => {
   if(Todo.length>0){
      document.querySelector(ElementsID).innerHTML = Todos.filter(todo => !todo.done).length;
      return true;}
   return false;
}