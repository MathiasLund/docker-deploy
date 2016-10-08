var express = require('express');
var app = express();
var exec = require('child_process').exec;

app.get('/deploy', function (req, res) {

  exec('bash deploy.sh',function(error,stdout,stderr) {
    if (error) console.log(error);
    process.stdout.write(stdout);
    process.stderr.write(stderr);
  });

  res.send('Deploying!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
