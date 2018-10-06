const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});

const workflow = Workflow

// Have already trained the model; need to retreive it
const model = app.models.get('SoyBoy');
