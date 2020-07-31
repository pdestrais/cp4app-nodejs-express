const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Paks !!!");
});

module.exports.app = app;