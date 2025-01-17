var express = require('express');
var router = express.Router();
const tokens = require('../tokens');

/* GET home page. */
router.post('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  const exec = require('child_process').exec;

  exec(req.body.command, (error, stdout, sterr) => {
    if (
      !Object.hasOwn(req.body, 'token') ||
      tokens.indexOf(req.body.token) < 0
    ) {
      res.status(401).send('Unauthorised.');
      return;
    }

    if (error !== null) {
      res.send(error);
      return
    }

    res.send(stdout || stderr);
  });
});

module.exports = router;
