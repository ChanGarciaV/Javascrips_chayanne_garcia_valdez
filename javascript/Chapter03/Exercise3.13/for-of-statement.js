var stopWatch = {
    elapsedTime: 0,
    resultsHistory: [],
    isTiming: true,
    isPaused: true,
    start: function(){console.log("start");},
    pause: function(){console.log("pause");},
    resume: function(){console.log("resume");},
    stop: function(){console.log("stop");}
    };

    let nombre = "Nabucodonosor";

    for (let name of nombre) {
        console.log(name, ":", stopWatch[name]);
        };
let numbers = [9,55,233345,23,1,65,43,34];

        for(let number of numbers){
            console.log(number);
        }