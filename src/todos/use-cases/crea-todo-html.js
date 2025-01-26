import { Todo } from '../models/todo.model';
/**
 * 
 * @param {Todo} todo 
 */

export const creaTodohtml = (todo) => {
    if (!todo) { throw new Error('El Objeto Todo se requiere'); }

    /* separando un objeto primitivo */
    const { done, description, id } = todo;
    const html = `<div class="view">
                    <input class="toggle" type="checkbox" ${done ? 'checked' : ''}  >
                    <label>${description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`;
    const liE = document.createElement('li');
    liE.setAttribute('data-id', id);
    if (done) { liE.classList.add('completed'); }
    liE.innerHTML = html;
    return liE;
}