var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/groot.json";

// var serverURL = "https://api.funtranslations.com/translate/minion.json" 

function getTranslationUrl(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured"+ error);
    alert("something wrong with server! Try again after sometime.");
}

function clickHandler(){
    var inputText = txtInput.value;
    
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedTxt = json.contents.translated;
        outputDiv.innerText = translatedTxt;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);