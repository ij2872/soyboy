var express = require('express');
var router = express.Router();
var fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const data1= require('../json.json');
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, "tmp" + '-' + Date.now() + ".jpg")
  }
})

var upload = multer({ storage: storage })

// Clarify


const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
    apiKey: 'f96d18f6e7d24dc89faa91fe40861d02'
});
//SoyBoy

function predictUserImage(userImagePath){
  return readFile(userImagePath).then((data) => {
    const base64Image = data.toString('base64');
    return clarifaiApp.models.predict('soy', base64Image).then(function(res,err){
      if (err){
        console.log("THERE IS AN ERROR ON WORKFLOW")
        return;
      } else{
        // console.log("returning json from workflow");
        // console.log(res);
        return JSON.stringify(res);
      }
    });
  });
}
function predictUserImageBeard(userImagePath){
  return readFile(userImagePath).then((data) => {
    const base64Image = data.toString('base64');
    return clarifaiApp.models.predict('Beard', base64Image).then(function(res,err){
      if (err){
        console.log("THERE IS AN ERROR ON WORKFLOW")
        return;
      } else{
        // console.log("returning json from workflow");
        // console.log(res);
        return JSON.stringify(res);
      }
    });
  });
}






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/profile', upload.single('files'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  
  res.redirect('/results:' +req.file.filename);
})


// SAVE
// router.post('/', function(req, res){
//   console.log("trust the proc");
//   console.log(req.body.img64);

//   writeFile("./public/images/tmp1.jpeg", req.body.img64, function(err){
//     if(err){
//       return console.log("error with writing file");
//     }
//     console.log("File Saved");
//   });


//   // res.send(req.body.img64);
//   // res.redirect('/results:' + 3);
// });

router.get('/results:id', function(req,res){
  let path = req.params.id;
  let imagePath = "./public/images/" + path.substring(1);
  // let imagePath = "./public/images/mat1.jpg";
  predictUserImage(imagePath).then((json) =>{
    predictUserImageBeard(imagePath).then((json2)=>{

    let data = (json) ? JSON.parse(json): {empty: "2"};
    let data_beard = (json2) ? JSON.parse(json2) : {empty: "3"};
 
    
  

    res.render('results', {
      imgLocation: imagePath.substr(8),
      SoyboyVal:  data.empty ? "-0": Math.floor(100 * data.outputs[0].data.concepts[0].value),
      SoybeardVal: Math.floor(100 * data_beard.outputs[0].data.concepts[0].value)
    });
    });

  });


  // res.send("Failed in promise");

});

module.exports = router;
