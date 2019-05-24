var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');

//Settings
app.set('port', process.env.PORT || 3000 );
app.use(bodyParser.json());

//Middlewares
app.use(require('./routes/employees'));
app.use(require('./routes/products'));
app.use(require('./routes/assemblies'));
app.use(require('./routes/assembly_products'));
app.use(require('./routes/customers'));
app.use(require('./routes/orders'));

//Routes


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
