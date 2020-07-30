const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody demo!");
});

module.exports.app = app;