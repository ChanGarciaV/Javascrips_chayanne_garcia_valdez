var keyNames = "WASDwasd";
var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.
    length));
console.log("keyName:", keyName);

console.log("keyName:", keyName);
switch (keyName.toLowerCase()) {
    case "a":
    case "j":
        console.log("move left"); //This block will execute when break; //
        break;
    // keyName is a
    case "d":
    case "k":
        console.log("move right");//This block will execute when break; //
        break;
    //  keyName is d
    case "w":
    case "i":
        console.log("move up");//This block will execute when break; //
        break;
    //keyName is w
    case "s":
    case "m":
        console.log("move down");//This block will execute when break; //
        break;
    //keyName is s
    default:
        console.log("invalid key");
        break;
}