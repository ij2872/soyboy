var express = require('express');
var router = express.Router();
var fs = require('fs');


// Clarify
const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});

const model = clarifaiApp.models.get('SoyBoy');

function predictUserImage(userImagePath) {
    // let userImage = Clarifai.ClImage(fs.open(userImagePath, 'rb'));
    var clarReturn;
    fs.readFile(userImagePath, function(err, data) {
      if(err){
        return;
      }else{
        var base64Image = data.toString('base64');
        clarReturn = clarifaiApp.predict(model, base64Image, false);

      }
      // clarReturn = clarifaiApp.predict(model, data, false);
    });

    return clarReturn;
    // return model.predict([userImage]);
}

//------




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
  
  res.send(predictUserImage("../res/testFile.jpg"));
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
