/**
 * @param {string} elementId
 */
import html from './app.html?raw';

export const App = (elementId) => {
    
    //cuando app se llamada usaremos una funcion autocargada
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

    })();



} 