var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gridbuild', { title: 'Grid Build' });
  let query = req.query

  console.log(`rows ${query.rows}`)
  console.log(`cols ${query.cols}`)
  {title:`Grid Build, query.col` }
});

module.exports = router;
