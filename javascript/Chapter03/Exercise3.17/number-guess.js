let resultsMsgEle = document.getElementById('results-msg'); // Para mostrar el mensaje el resultado del id en el html
let matchedMsgEle = document.getElementById('match-msg'); // mensaje si hacen match
let noMatchMsgEle = document.getElementById('no-match-msg'); // mensaje si no hacen match
let numberToGuessEle = document.getElementById('number-to-guess');// muestra el mensaje del numero que se tiene que adivinar
let guessInputEle = document.getElementById('number-guessed');// toma el valor del numero que proponemos
let testButtonEle = document.getElementById('test-button');// vincula el boton
testButtonEle.addEventListener('click', testMatch); // pone a escuchar si el boton ha sido presionado
function testMatch(e) { // inicia la funcion 
    matchedMsgEle.style.display = 'none'; // los mensajes no se muestran
    noMatchMsgEle.style.display = 'none';// los mensajes no se muestran
    resultsMsgEle.style.display = 'none';// los mensajes no se muestran
    let numberGuessed = parseInt(guessInputEle.value); // convierte el numero de string a entero
    resultsMsgEle.style.display = 'block'; // esto hace que se muestre el block en resultados
    if(isNaN(numberGuessed)){
        noMatchMsgEle.style.display = 'inline';
        numberToGuessEle.innerText = 'ivalid';
    }
    else if (!isNaN(numberGuessed) && numberGuessed > 0 && numberGuessed <= 10) {
        resultsMsgEle.style.display = 'block';
        let numberToGuess = Math.floor(Math.random() * 10 + 1);
        if (numberGuessed == numberToGuess) {
            matchedMsgEle.style.display = 'inline';
            console.log("MATCHED!");
        } else {
            noMatchMsgEle.style.display = 'inline';
            console.log("NOT MATCHED!");
        }
        numberToGuessEle.innerText = numberToGuess;
        console.log("Number guessed:", numberGuessed);
        console.log("Number to match:", numberToGuess);
    }
    //console.log("Clicked!");
}