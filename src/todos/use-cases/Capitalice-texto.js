/**
 * 
 * @param {String} caracter 
 */

export const textoCapital = (caracter) =>{
    caracter = caracter.split(" ");
    let texto = "";
   /* tomamos la el string lo volvemos un arreglo cortamos la primera letra y la ponemos en mayuscula y la pegamos con el resto del string que esty separando
   en el objeto del texto */
    caracter.forEach((palabra) => {
        palabra = palabra.slice(0,1).toUpperCase()+palabra.slice(1);
        texto+=palabra+" ";
    });
    return texto;
}