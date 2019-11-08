const morgan = require("morgan");
const http = require('http');
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
//var expressStaticGzip = require("express-static-gzip");
//var gzipStatic = require('connect-gzip-static');

//connect()

const app = express();
app.disable('x-powered-by');
// app.enable('trust proxy')
var corsOptions = {
    origin: function (origin, callback) {
        return callback(null, true)
        if (allowedOrigins[origin]) {
            return callback(null, true)
        } else {
            callback(new Error('ERR_CORS'))
        }
    }
};
const router = express.Router();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


router.use(express.static('public'));

app.get('*.js',function(req, res, next) {
req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
})


router.use(function(req, res, next) {
  res.sendFile(path.resolve(__dirname, './public','index.html'))
});

app.use('/bolsa', router);
/*
app.use('/bolsa', express.static(__dirname+'/public'));
//app.use(gzipStatic(path.join(__dirname, './public')));
app.get('*', function (_request, response) {
    response.sendFile(path.resolve(__dirname, './public', 'index.html'))
})

*/
const httpsServer = http.createServer(app);
httpsServer.listen(process.env.PORT, () => {
    console.log('HTTPS Server running on port ' + process.env.PORT);
});

