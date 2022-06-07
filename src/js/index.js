import '../css/main.scss';
import '../css/footer.scss';
import '../css/form.scss';
import '../css/header.scss';
import { validateUrl } from './urlValidation';
import {createUI} from './createUI';

//let urlMain = '';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    const urlToAnalyze = document.getElementById('urlToAnalyze').value;

    if (validateUrl(urlToAnalyze)) {
            postUserInput('/all', {userURL: urlToAnalyze, apiKey: process.env.apiKey});
            createUI('./all');
    } else {
        alert("Invalid URL");
    }
};

const postUserInput = async (url, data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type' : 'application/json',},
        body: JSON.stringify(data),
    });
};