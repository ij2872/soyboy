var express = require('express');
var router = express.Router();
var fs = require('fs');


// Clarify
const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});

// const model = clarifaiApp.models.get('SoyBoy');

function predictUserImage(userImagePath) {
    // let userImage = Clarifai.ClImage(fs.open(userImagePath, 'rb'));
    var clarReturn;
    fs.readFile(userImagePath, function(err, data) {
      if(err){
        console.log("File Does Not Exist");
        return;
      }else{
        console.log("File Exists");
        var base64Image = data.toString('base64');
        // clarReturn = model.predict(base64Image, false);
        clarifaiApp.models.get('SoyBoy').then(function(mod,err){

          mod.predict(base64Image, false).then(function(res, err){
            clarReturn = res;
          });
          
        });

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
  predictUserImage("../res/testFile.jpg")
  res.redirect('/results');
});

router.get('/results:id', function(req,res){
  var data = predictUserImage("./res/testFile.jpg")
  var id = req.params.id;
  var imgLocation = "./img/"
  var soyPerc = 90;
  var isSoy = (soyPerc > 80) ? true : false;
  var isBeard = false;
  console.log(data);

  var jsonResults = {
    status: false,
    imgLocation: imgLocation,
    id: id,
    data: {
      soyPercentage: soyPerc,
      isSoy: isSoy,
      isBeard: isBeard
    },
    results: data,
    hasData: "YES"

  };

  res.send(JSON.stringify(jsonResults));
});

module.exports = router;
