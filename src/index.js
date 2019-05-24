const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000 );

//Middlewares
app.use(require('./routes/employees'));
app.use(require('./routes/products'));
app.use(require('./routes/assemblies'));
app.use(require('./routes/assembly_products'));
app.use(require('./routes/customers'));

//Routes


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
