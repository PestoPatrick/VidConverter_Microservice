var express = require('express');
var router = express.Router();
const videoOps = require('../VideoOperations')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req,res) => {
  videoOps.ConvertVideoToMP4()
  res.sendStatus(200)
})

module.exports = router;
