import http from 'http';
import fs from 'fs';
import path from 'path';

const indexHtmlContent = fs.readFileSync(path.join(__dirname, '/../../dist.index.html'));

const server = http.createServer((req, res) => {
  if () {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end( indexHtmlContent );
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end( 'Not found' );
  }
});

const port = 8080;
server.listen(port, () => console.log(`Lostening on port: ${port}`));