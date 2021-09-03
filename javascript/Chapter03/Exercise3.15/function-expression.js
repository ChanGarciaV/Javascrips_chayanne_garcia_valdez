//getRandomStringCharacter(); cuanto llamas la funcion de una variable funcion antes de declararla no funciona
//var getRandomStringCharacter = function (source) {
// var returnCharacter = '';
// console.log("source:", source);
var getRandomStringCharacter = function (source) {
    if (source != undefined && source.length > 0) {
        returnCharacter = source.charAt(Math.floor(Math.random() * source.
            length));
        return returnCharacter;
    }

    //  return returnCharacter;
}
//}
// console.log('getRandomStringCharacter', getRandomStringCharacter);
// getRandomStringCharacter();
// getRandomStringCharacter("AEIOU");
console.log('():', getRandomStringCharacter());
console.log('("AEIOU"):', getRandomStringCharacter('AEIOU'));
console.log('("JavaScript"):',
    getRandomStringCharacter('JavaScript'));
console.log('("124678"):', getRandomStringCharacter('124678'));
console.log('(124678):', getRandomStringCharacter(124678));
console.log('(true):', getRandomStringCharacter(true));