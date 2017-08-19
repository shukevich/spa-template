var express = require('express'),
  app = express(),
  isProd = typeof(process) !== 'undefined' && process && process.env && process.env.PORT,
  port = isProd ? process.env.PORT : 3000,
  rootFolder = `${__dirname}/www/${isProd ? 'release' : 'src'}`;

app.use(express.static(rootFolder));

app.get('/', function(req, res){
  res.sendFile(`${rootFolder}/Index.html`);
});

app.get('*', function (req, res) {
  res.redirect('/');
});

app.listen(port, function () {
  console.log(`New express server started listening on port ${port}`);
});