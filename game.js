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
        if(player.hp > 0) {
            while(player.hp > 0)
            {
                var attackPlayerVsTarget = '"<p>" + player.name + " attaque " + target.name + " et lui inflige " + player.strength + " points de dégats " + "</p>"';
                showMessageLog(attackPlayerVsTarget);

                target.hp = target.hp - player.strength;

                var textTargetVsPlayer = '"<p>" + target.name + " perds " + player.strength + " de points de vie, " + target.hp + " points de vie restants " + "</p>"';
                showMessageLog(textTargetVsPlayer);

                if(target.hp > 0) {
                    var attackTargetVsPlayer = '"<p>" + target.name + " attaque " + player.name + " et lui inflige " + target.strength + " points de dégats " + "</p>"';
                    showMessageLog(attackTargetVsPlayer);

                    player.hp = player.hp - target.strength;

                    var textPlayerVsTarget = '"<p>" + player.name + " perds " + target.strength + " de points de vie, " + player.hp + " points de vie restants " + "</p>"';
                    showMessageLog(textPlayerVsTarget);
                }
                else if(target.hp <= 0) {
                    var victory = '"<p>" + "Félicitations ! " + player.name + " a remporté la victoire. Butin remporté : " + "</p>"';
                    showMessageLog(victory);
                    // insérer la fonction loot
                    loot();
                }       
                else if(player.hp <= 0) {
                    var gameover = '"<p>" + "Défaite ! vous avez été vaincu par " + target.name + "</p>"';
                    showMessageLog(gameover);
                    // insérer fonction fin de partie
                }
            }
        }
    }
    else if(firstAttack(player) == false)
    {
        if(player.hp > 0) {
            while(player.hp > 0)
            {
                var attackTargetVsPlayer = '"<p>" + target.name + " attaque " + player.name + " et lui inflige " + target.strength + " points de dégats " + "</p>"';
                showMessageLog(attackTargetVsPlayer);

                player.hp = player.hp - target.strength;

                var textPlayerVsTarget = '"<p>" + player.name + " perds " + target.strength + " de points de vie, " + player.hp + " points de vie restants " + "</p>"';
                showMessageLog(textPlayerVsTarget);

                if(target.hp > 0) {
                    var attackPlayerVsTarget = '"<p>" + player.name + " attaque " + target.name + " et lui inflige " + player.strength + " points de dégats " + "</p>"';
                    showMessageLog(attackPlayerVsTarget);

                    target.hp = target.hp - player.strength;

                    var textTargetVsPlayer = '"<p>" + target.name + " perds " + player.strength + " de points de vie, " + target.hp + " points de vie restants " + "</p>"';
                    showMessageLog(textTargetVsPlayer);
                }
                else if(target.hp <= 0) {
                    var victory = '"<p>" + "Félicitations ! " + player.name + " a remporté la victoire. Butin remporté : " + "</p>"';
                    showMessageLog(victory);
                    // insérer la fonction loot
                    loot();
                }       

                else {
                    var gameover = '"<p>" + "Défaite ! vous avez été vaincu par " + target.name + "</p>"';
                    showMessageLog(gameover);
                    // insérer la fonction fin de partie
                }
            }
        }
    }
}
// buttonreset.addEventListener('click',Reset,false);


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

function showMessageLog(text) {
    var timer;
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        message(text);
    }, 3000}; // 3s de délai

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

function loot(){  
 
   player.po + 3;
   dropPourcentage();
   if(dropPourcentage() == true){
    player.inventory.hpPotion + 1;
     }
}     

function dropPourcentage() {
    var resultPlayer = 10 / 100;
    var resultIA = Math.random().Tofixed(1);
    if(resultPlayer < resultIA ) {
        return true;
    }
    else{
        return false;
    }
}

        

/*************************
 *                       *
 * Création des tableaux *
 *                       *
 *************************/

