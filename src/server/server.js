//install packages and initiate
const express = require('express');
const app = express();
app.use(express.static('dist'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
const req = require('express/lib/request');
app.use(cors());

const axios = require('axios').default;

//server info
const port = 8080;
const server = app.listen(port, listening);

function listening(){
  console.log(`running on localhost: ${port}`);
};

projectData = {};
userURL = '';
apiKey = '';

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
});

app.get('/all', function (req, res) {
  res.send(projectData);
});

app.post('/all', function (req, res) {
  userURL = req.body.userURL;
  apiKey = req.body.apiKey;
  buildApiURL();
  getSentiment(urlMain);
  res.send(projectData);
});

function buildApiURL() {
  urlMain = 'https://api.meaningcloud.com/sentiment-2.1?key='+apiKey+'&of=json&url='+userURL+'&lang=en';
  return urlMain;
};

const getSentiment = async (urlMain)=> {
  try {
    const response = await axios.get(urlMain)
    projectData = {
      polarity: response.data.score_tag,
      subjectivity: response.data.subjectivity,
      snippet: response.data.sentence_list[2].text
    }
  } catch(error) {
      console.log("error", error);
  };
};

