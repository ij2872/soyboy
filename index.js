const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '468e1a63a329408a9d28686d14cf5efb'
});

const model = app.models.get('SoyBoy');

//const image = ClImage(file_obj=open('/home/user/image.jpeg', 'rb'))
// model.predict([image])

// model.predict response:
/*
{
  "status": {
    "code": 10000,
    "description": "Ok"
  },
  "outputs": [
    {
      "id": "e1cf385843b94c6791bbd9f2654db5c0",
      "status": {
        "code": 10000,
        "description": "Ok"
      },
      "created_at": "2016-11-22T16:59:23Z",
      "model": {
        "name": "general-v1.3",
        "id": "aaa03c23b3724a16a56b629203edc62c",
        "created_at": "2016-03-09T17:11:39Z",
        "app_id": null,
        "output_info": {
          "message": "Show output_info with: GET /models/{model_id}/output_info",
          "type": "concept"
        },
        "model_version": {
          "id": "aa9ca48295b37401f8af92ad1af0d91d",
          "created_at": "2016-07-13T01:19:12Z",
          "status": {
            "code": 21100,
            "description": "Model trained successfully"
          }
        }
      },
      "input": {
        "id": "e1cf385843b94c6791bbd9f2654db5c0",
        "data": {
          "image": {
            "url": "https://s3.amazonaws.com/clarifai-api/img/prod/b749af061d564b829fb816215f6dc832/e11c81745d6d42a78ef712236023df1c.jpeg"
          }
        }
      },
      "data": {
        "concepts": [
          {
            "id": "ai_l4WckcJN",
            "name": "blur",
            "app_id": null,
            "value": 0.9973569
          },
          {
            "id": "ai_786Zr311",
            "name": "no person",
            "app_id": null,
            "value": 0.98865616
          },
          {
            "id": "ai_JBPqff8z",
            "name": "art",
            "app_id": null,
            "value": 0.986006
          },
          {
            "id": "ai_5rD7vW4j",
            "name": "wallpaper",
            "app_id": null,
            "value": 0.9722556
          },
          {
            "id": "ai_sTjX6dqC",
            "name": "abstract",
            "app_id": null,
            "value": 0.96476805
          },
          {
            "id": "ai_Dm5GLXnB",
            "name": "illustration",
            "app_id": null,
            "value": 0.922542
          },
          {
            "id": "ai_5xjvC0Tj",
            "name": "background",
            "app_id": null,
            "value": 0.8775655
          },
          {
            "id": "ai_tBcWlsCp",
            "name": "nature",
            "app_id": null,
            "value": 0.87474406
          },
          {
            "id": "ai_rJGvwlP0",
            "name": "insubstantial",
            "app_id": null,
            "value": 0.8196385
          },
          {
            "id": "ai_2Bh4VMrb",
            "name": "artistic",
            "app_id": null,
            "value": 0.8142488
          },
          {
            "id": "ai_mKzmkKDG",
            "name": "Christmas",
            "app_id": null,
            "value": 0.7996079
          },
          {
            "id": "ai_RQccV41p",
            "name": "woman",
            "app_id": null,
            "value": 0.7955615
          },
          {
            "id": "ai_20SCBBZ0",
            "name": "vector",
            "app_id": null,
            "value": 0.7775099
          },
          {
            "id": "ai_4sJLn6nX",
            "name": "dark",
            "app_id": null,
            "value": 0.7715479
          },
          {
            "id": "ai_5Kp5FMJw",
            "name": "still life",
            "app_id": null,
            "value": 0.7657637
          },
          {
            "id": "ai_LM64MDHs",
            "name": "shining",
            "app_id": null,
            "value": 0.7542407
          },
          {
            "id": "ai_swtdphX8",
            "name": "love",
            "app_id": null,
            "value": 0.74926054
          },
          {
            "id": "ai_h45ZTxZl",
            "name": "square",
            "app_id": null,
            "value": 0.7449074
          },
          {
            "id": "ai_cMfj16kJ",
            "name": "design",
            "app_id": null,
            "value": 0.73926914
          },
          {
            "id": "ai_LxrzLJmf",
            "name": "bright",
            "app_id": null,
            "value": 0.73790145
          }
        ]
      }
    }
  ]
}
*/
