/**indicaremos que utilizaremos Express
 * la cual nos retorna una función,
 */
  
  const express = require('express');
  /**invocamos la funcion de axpress
   * para tener disponible todos los métodos del framework
   */
const app = express();
const path =require('path');
const mainController = require('./controllers/mainController');
/**recursos estaticos cambio de 3030 */

const port=3000;
app.use(express.static('public'));

/**sistema de ruteo para renderizar la home.html cuando tipeamos
http://localhost:3000/. */

app.get('/',mainController.home);
app.get('/about',mainController.about);
    /**requerir controladores
     * se modifica esta linea app.get('/') sintetizandola */
/*

*configurar nuestro servidor.
 * 
 */

app.listen(port, ()=>
    console.log('Servidor funcionando')
    );


