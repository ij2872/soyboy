var express = require('express');
var router = express.Router();



// Clarify
const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});

const model = clarifaiApp.models.get('SoyBoy');

function predictUserImage(userImagePath) {
    let userImage = ClImage(open(userImagePath, 'rb'));
    return model.predict([userImage]);
}

//------




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  res.send('It Worked!');
});

router.get('/results:id', function(req,res){

  var id = req.params.id;
  var imgLocation = "./img/"
  var soyPerc = 90;
  var isSoy = (soyPerc > 80) ? true : false;
  var isBeard = false;

  var jsonResults = {
    status: false,
    imgLocation: imgLocation,
    id: id,
    data: {
      soyPercentage: soyPerc,
      isSoy: isSoy,
      isBeard: isBeard
    }
  };

  res.send(JSON.stringify(jsonResults));
});

module.exports = router;
