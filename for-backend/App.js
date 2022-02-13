require('./config/mongoose');
const express = require('express');
const app = express();
var cors = require('cors');
const productRouter = require('./routes/routes');
const logger = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use('/api', productRouter);

// Menangani Error 404
app.use((req, res, next) => {
    res.status(404);
    res.send({
        status: 'Failed',
        message: 'Resource ' + req.originalUrl + ' Not Found'
    });
});

app.listen(3001, () => console.log('Server: http://127.0.0.1:3001'));