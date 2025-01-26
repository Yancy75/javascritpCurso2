import { Todo } from "../models/todo.model";
import { creaTodohtml } from './'

let Ele;
/**
 * 
 * @param {string} elementoId 
 * @param {Todo} todos 
 */



export const construtoPantalla = (elementoId, todos = []) => {
   
    if (!Ele) { Ele = document.querySelector(elementoId); }
    if (!Ele) { throw new Error(`el valor de elementoId ${elementoId} no existe en el doom`) }
    
    Ele.innerHTML = '';
     
    todos.forEach(tod => {
         Ele.append(creaTodohtml(tod));
    });
}