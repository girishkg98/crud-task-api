const express = require('express');

const app = express();

/* app.listen(3000, function(){
    console.log('server started on port 3000');
}); */


const mongoose = require('./database/mongoose');   

app.listen(3000, () => {
    console.log('server started on port 3000');
});

//Also we have installed nodemon (command -> install nodeman -g --save-dev) which will automatically detect the changes in .js files and updates the response without restarting the express server. Once it's installed, we can execute the app.js by using the command-> nodemon app.js instead of the command -> node app.js