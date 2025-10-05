const http = require('http');
const url = require('url');
const data = require('./input/data.json');

const server = http.createServer((req, res) => {
    const requestUrl = req.url;
    if (requestUrl === '/' || requestUrl === '/overview') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the overview page.\n');
    } else if (requestUrl === '/products') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Page not found!</h1>');
    }

});
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});