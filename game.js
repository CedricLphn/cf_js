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
var highscore = 0;

if(timer){
    clearInterval(timer);
}

// timer = setInterval(function(){
//     if(night == true) {
//         night =  false;
//     }else {
//         night = true;
//     }
//     console.log(night);

// }, 2000);

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

var shop = {
    strengthPotion: {
        price: 2,
        strength: 1
    },
    agilityPotion: {
        price: 2,
        agility: 1
},
    staminaPotion: {
        price: 2,
        stamina: 1
    },
    hpPotion: {
        price: 5,
        hp: 20
    }
};



function generateMonster() {
    let name = ["Rat", "Loup", "Tauren", "Aigle", "Ananas", "Cactus"];
    let suffix = ["de la nuit", "mutant", "affamé", "assassin"];

    console.log(Math.floor(Math.random() * (name.length) + 1));
    console.log(Math.floor(Math.random() * (suffix.length)) + 1);


    return name[Math.floor(Math.random() * (name.length))] + " " + suffix[Math.floor(Math.random() * (suffix.length))];
}
//buttonreset.addEventListener('click',Reset,false);
function attack(player, target) {
    firstAttack(player);
    if(firstAttack(player) == true)
    {

        text = "<p>" + player.name + " attaque " + target.name + " et lui inflige " + player.strength + " points de dégats ";

    }
    if(player.agility / 100 < Math.random().Tofixed(2)) {

    }
}
// buttonreset.addEventListener('click',Reset,false);
// function attack(player, target) {
//     if()
//     document.getElementById('box').innerHTML = "<p>" + player + " attaque " + target + " et lui inflige " + player.strength + " points de dégats '
// }

function firstAttack(player) {
    var resultPlayer = player.agility / 100;
    var resultIA = Math.random().Tofixed(2);
    if(player.agility / 100 < Math.random().Tofixed(2)) {
        return true;
    }
    else{
        return false;
    }
}

function delaychatbox(text) {
    var timer;
    if(timer) {
        clearInterval(timer);
    }
    timer = setInterval(function() {
        message(text);
    }, 3000);
}

function start () {
    let insert = prompt("Entrez votre nom pour debuter la partie .");
    if(insert == null || insert == ''){
        start();
    }
    else {
        player.name = insert;
        console.log(player.name);
        //on lancera la grosse fonction aventure
    }
}

function useItem(potion){
    if(potion == undefined) {
        return false;
    }
    if(potion == "strengthPotion" && player.inventory.strengthPotion > 0) {
        player.strength++;
        player.inventory.strengthPotion = player.inventory.strengthPotion - 1;
        message("<p>Ta force a été augmenté de 1</p><p>Tu as dorénavant " + player.strength +" de force</p>");
    }else if(potion == "agilityPotion" && player.inventory.agilityPotion > 0) {
        player.agility++;
        player.inventory.agilityPotion = player.inventory.agilityPotion - 1;
        message("<p>Ton agilité a été augmenté de 1</p><p>Tu as dorénavant " + player.agility +" d'agilité</p>");
    }else if(potion == "staminaPotion" && player.inventory.staminaPotion > 0) {
        player.stamina++;
        player.inventory.staminaPotion = player.inventory.staminaPotion - 1;
        message("<p>Ton endurance a été augmenté de 1</p><p>Tu as dorénavant " + player.stamina +" d'endurance</p>");
    }else if(potion == "hpPotion" && player.inventory.hpPotion > 0) {
        if(player.hp + 20 > player.stamina) {
            player.hp = player.stamina;
        }else {
            player.hp += 20;
        }
        player.inventory.hpPotion = player.inventory.hpPotion - 1 ;
        message("<p>Ta santé a été augmenté de 20 points</p><p>Tu as dorénavant " + player.hp +" point(s) de santé</p>");
    }else {
        message("<p>Tu n'as pas assez de " + potion + "</p>");
    }
}

function message(text) {
    document.getElementById('box').innerHTML = text;
    console.log(text);
}

/*************************
 *                       *
 * Création des tableaux *
 *                       *
 *************************/

