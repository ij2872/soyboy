const Clarifai = require('clarifai');

const clarifaiApp = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});

const model = clarifaiApp.models.get('SoyBoy');

function predictUserImage(userImagePath) {
    let userImage = ClImage(open(userImagePath, 'rb'));
    return model.predict([userImage]);
}
