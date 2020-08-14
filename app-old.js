

const http = require('http');


http.createServer( (req, res) =>{

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'joel aldave',
        edad: 25,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write('Homa Mundo');
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto 8080');
