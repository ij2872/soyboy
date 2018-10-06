var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  res.send('It Worked!');
});

router.get('/results:id', function(req,res){
  var jsonResults = {
    status: false,
    imgLocation: './resc/img.jpg',
    id: req.params.id
  };
  
  res.send(JSON.stringify(jsonResults));
});

module.exports = router;
