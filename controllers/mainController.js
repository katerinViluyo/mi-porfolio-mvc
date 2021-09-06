/*
*controlador
 *crea (exporto de app.js) obj literal que tiene propiedades y metodos
 * atributos
 * 
 * metodo :atributo que ajoja una fuccion, ejecuta algo y devuelve un resultado
dir name variabre me da ruta absolutaa ,'..'= indica que existen carpetas en medio de la ruta
*/

module.exports = {
 
  home: (req,res) => res.sendFile(path.join(__dirname,'..', 'views','home.html')),
 about: (req,res) => res.sendFile(path.join(__dirname,'..', 'views','about.html'))
}

/**exportamos la contante */
const path =require('path');