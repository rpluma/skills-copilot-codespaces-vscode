// Create web server for comments
const http = require('http');
const fs = require('fs');
const port = 80;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const comments = JSON.parse(fs.readFileSync('comments.json'));
      comments.push(JSON.parse(body));
      fs.writeFileSync('comments.json', JSON.stringify(comments));
      res.end();
    });
  } else if (method === 'GET' && url === '/comments') {
    res.setHeader('Content-Type', 'application/json');
    res.end(fs.readFileSync('comments.json'));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

