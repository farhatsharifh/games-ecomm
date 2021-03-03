const http = require("http");
const app = require("./app");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};


const PORT = normalizePort("3003");
app.set("port", PORT);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT} .....`);
});
