const morgan = require("morgan");
const http = require('http');
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const gzipStatic = require('connect-gzip-static');
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
//router.use(gzipStatic(path.join(__dirname, 'public')));
router.use(function(req, res, next) {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'))
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

