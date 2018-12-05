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

/*************************
 *                       *
 *  Création des objets  *
 *                       *
 *************************/

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

var monster = {
    name: null,
    strenght: 5,
    stamina: 7,
    hp: 7
}

var boutique = {
    strengthPotion: {
        prix: 2,
        strength: 1
    },
    agilityPotion: {
        prix: 2,
        agility: 1
},
    staminaPotion: {
        prix: 2,
        stamina: 1
    },
    hpPotion: {
        prix: 5,
        hp: 20
    }
};



function generateMonster() {
    let name = ["Rat", "Loup", "Tauren", "Aigle", "Ananas"];
    let suffix = ["de la nuit", "mutant", "sauvage", "assassin"];


    return Math.random * (0- name.length) + name.length + " " + Math.random * (0- suffix.length) + suffix.length;
}
function start () {
	let insert = prompt("Entrez votre nom pour debuter la partie .");
	if(insert == null){
		return(insert);
	}
	else {
		//player.name = insert
		//on lancera la grosse fonction aventure
	}
}


/*************************
 *                       *
 * Création des tableaux *
 *                       *
 *************************/

