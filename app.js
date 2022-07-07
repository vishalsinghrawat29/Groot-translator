var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/groot.json";

function getTranslationUrl(input){
    return serverUrl + "?" + "text="+ input;
}

function errorHandler(error){
    console.log("error occured"+ error);
    alert("something wrong with server! Try again after sometime.");
}

function clickHandler(){
    var inputTxt = txtInput.value;

    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputDiv.innerText = translatedTxt;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);