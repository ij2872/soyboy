var express = require('express');
var router = express.Router();
var fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);

// Clarify
const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});

// const model = clarifaiApp.models.get('SoyBoy');

function predictUserImage(userImagePath) {
  return readFile(userImagePath).then((data) => {
    console.log("File Exists");
    const base64Image = data.toString('base64');
    return clarifaiApp.models.get('SoyBoy').then((mod) => {
        return mod.predict(base64Image, false).then((res) => {
            console.log("About to predict");
            // console.log(res);
            return JSON.stringify(res);
        });
    });
});
}


    // let userImage = Clarifai.ClImage(fs.open(userImagePath, 'rb'));
    var clarReturn;
    // fs.readFile(userImagePath, function(err, data) {
    //   if(err){
    //     console.log("File Does Not Exist");
    //     return;
    //   }else{
    //     console.log("File Exists");
    //     var base64Image = data.toString('base64');
    //     // clarReturn = model.predict(base64Image, false);
    //     clarifaiApp.models.get('SoyBoy').then(function(mod,err){
    //       console.log("RETURNING FROM MODELTS.GET " + mod);
    //       if(err) console.log("error");

    //       mod.predict(base64Image, false).then(function(res, err){
    //         if(err) console.log("Error at predict");
    //         console.log("About to predict");
    //         clarReturn = JSON.stringify(res);
    //         console.log(clarReturn);

    //         return clarReturn;
    //       });

    //     });

    //   }
    //   // clarReturn = clarifaiApp.predict(model, data, false);
    // });

    // return clarReturn;
    // return model.predict([userImage]);
// }

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
  // var data = predictUserImage("./res/testFile.jpg");


  predictUserImage("./res/testFile.jpg").then((json) =>{
    let data = JSON.parse(json);
    // outputs.data.concepts[foreach].id
    // outputs.data.concepts(foreach).value
    console.log(data.concepts['SoyBoy'].id);



    res.render('results', {
      soy: json
    });



    // res.send(JSON.stringify(jsonResults));

  });


  // res.send("Failed in promise");

});

module.exports = router;
