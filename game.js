<<<<<<< Updated upstream
//     ______          ___                ______           __
//   / ________  ____/ (_____  ____ _   / ________ ______/ /_____  _______  __
//  / /   / __ \/ __  / / __ \/ __ `/  / /_  / __ `/ ___/ __/ __ \/ ___/ / / /
// / /___/ /_/ / /_/ / / / / / /_/ /  / __/ / /_/ / /__/ /_/ /_/ / /  / /_/ /
// \____/\____/\__,_/_/_/ /_/\__, /  /_/    \__,_/\___/\__/\____/_/   \__, /
//                          /____/                                   /____/

/***********************
*                      *
*  Gestion de la nuit  *
*                      *
***********************/

var night = false;
var timer;

if(timer){
    clearInterval(timer);
}

timer = setInterval(function(){
    if(night == true) {
        night =  false;
    }else {
        night = true;
    }
    console.log(night);

}, 2000);


var player = {
        name: null,
        strength: 10,
        agility: 10,
        stamina: 100,
        hp: 100,
        po: 0,
        inventory: {
                strengthPotion: 0,
                agilityPotion: 0,
                staminaPotion: 0,
                hpPotion: 0
        }
    };

