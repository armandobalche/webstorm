var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

//Settings
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

//Middlewares
app.use(require('./routes/assemblies'));
app.use(require('./routes/assembly_products'));
app.use(require('./routes/customers'));
app.use(require('./routes/employees'));
app.use(require('./routes/login'));
app.use(require('./routes/order_assemblies'));
app.use(require('./routes/order_status'));
app.use(require('./routes/orders'));
app.use(require('./routes/product_categories'));
app.use(require('./routes/products'));

//Routes


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
