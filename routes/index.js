var express = require('express');
var router = express.Router();
var fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const data1= require('../json.json');
// Clarify


const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});


function predictUserImage(userImagePath) {
  return readFile(userImagePath).then((data) => {
    console.log("File Exists");
    const base64Image = data.toString('base64');
    return clarifaiApp.models.get('SoyBoy').then((mod) => {
        return mod.predict(base64Image, false).then((res) => {
            console.log("About to predict");
            // console.log(res);
            return JSON.stringify(res);
        }).catch(function(err){
          console.log("error on mod.predict");
        });
    });
});
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// SAVE
router.post('/', function(req, res){
  let image64 = req.body.img64;
  console.log(image64);
  filePath = '/public/images';
  request.on('data', function(data){
    body += data;
  });

  res.redirect('/results:' + number);
});

router.get('/results:id', function(req,res){


  // let data = JSON.parse(JSON.stringify(data1));
  // res.render('results', {
  //   imgLocation: "./images/mat1.JPG",
  //   SoybeardVal: (100 * data.outputs[0].data.concepts[0].value),
  //   SoyboyVal:   (100 * data.outputs[0].data.concepts[1].value)
  // });

  
  let imagePath = "./public/images/testFile.jpg";
  predictUserImage(imagePath).then((json) =>{
    // let data = JSON.parse(json);

    console.log(json);
    // outputs.data.concepts[foreach].id
    // outputs.data.concepts(foreach).value
    // console.log(data.outputs[0].data.concepts[0].id);
    // console.log(data);
    


    // res.render('results', {
    //   imgLocation: "."+imagePath.substring(8),
    //   SoybeardVal: "data",//Math.floor(100 * data.outputs[0].data.concepts[0].value),
    //   SoyboyVal:   "data2"//Math.floor(100 * data.outputs[0].data.concepts[0].value)
    // });
    res.render('results')

  });


  // res.send("Failed in promise");

});

module.exports = router;
