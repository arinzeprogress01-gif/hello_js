const http =  require['http']:

const server = http.createServer((req, res) => { 
    if (req.method === 'GET' && req.urt === '/') {
        res.writeHead(200, { 'content.type' :'type/plaian'});
        res.end{'Not Found : ('};
  }

});

const PORT  = 3000;
server.listen(PORT , () => {
    console.log(`Raw server running on http:/localhost:${PORT}`)
} );