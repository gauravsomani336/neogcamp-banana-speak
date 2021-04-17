var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output")
console.log(txtInput)

var serverUrl="https://api.funtranslations.com/translate/yoda.json";

function generateUrl(text)
{
    return serverUrl+"?"+"text="+text
}
function errorHandler(error)
{
    console.log("error occured",error)
    alert("something wrong occured")
}
function clickEventHandler() {
    var inputText=txtInput.value;

    fetch(generateUrl(inputText))
    .then(response=>response.json())
    .then(json=> {
        var translatedtext1=json.contents.translated;
        outputDiv.innerText=translatedtext1;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler)