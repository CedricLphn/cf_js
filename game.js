//     ______          ___                ______           __
//   / ________  ____/ (_____  ____ _   / ________ ______/ /_____  _______  __
//  / /   / __ \/ __  / / __ \/ __ `/  / /_  / __ `/ ___/ __/ __ \/ ___/ / / /
// / /___/ /_/ / /_/ / / / / / /_/ /  / __/ / /_/ / /__/ /_/ /_/ / /  / /_/ /
// \____/\____/\__,_/_/_/ /_/\__, /  /_/    \__,_/\___/\__/\____/_/   \__, /
//                          /____/                                   /____/

/*************************
 *                       *
 *  Création des objets  *
 *                       *
 *************************/

var isAttack = true;

const params = {
    name : null,
    strength: 10,
    agility: 10,
    stamina: 100,
    hp: 100,
    po: 0,
    inventory: {
        strengthPotion: 0,
        agilityPotion: 0,
        staminaPotion: 0,
        hpPotion: 0,
        monsterHpPotion: 0
    }
};

var player = params;

const paramsMonster = {
    name: null,
    strenght: 5,
    stamina: 7,
    hp: 7
}

var monster = paramsMonster;


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

var switch_page;

if(switch_page){
    clearTimeout(switch_page);
}
switch_page = setTimeout(function(){
    if(player.name == null)
    {
        document.getElementById("startlogo").classList.remove("display");
        document.getElementById("startText").classList.add("display");
    }

},16500);

document.addEventListener("keypress", function() {
    if(player.name == null) {
        start();
        document.getElementById("startPage").remove();
        document.getElementById("start").classList.remove("display");
    } 

})
document.removeEventListener("keypress", function(){ return; });


/***********************
*                      *
*  Gestion de la nuit  *
*                      *
***********************/

var night = false;
var timer;
var highscore = 0;

var scoring = [];


if(timer){
    clearInterval(timer);
}


function updateBackground(variable) {
    if(isAttack == true){
        if(variable) {
            document.getElementById("game").style.background = "url(assets/night_battle.jpg)";
        }else {
            document.getElementById("game").style.background = "url(assets/day_battle.png)";
        }
    }else {
        document.getElementById("game").style.background = "url("+variable+")";
    }
}





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
    if(night == true) {
        var monsterStrength = target.strength + 1; 
    }else {
        var monsterStrength = target.strength;
    }

    if(firstAttack(player) == true)
    {
        if(player.hp > 0) {
            while(player.hp > 0)
            {
                var attackPlayerVsTarget = '"<p>" + player.name + " attaque " + target.name + " et lui inflige " + player.strength + " points de dégats " + "</p>"';
                showMessageLog(attackPlayerVsTarget);

                target.hp = target.hp - monsterStrength;

                var textTargetVsPlayer = '"<p>" + target.name + " perds " + monsterStrength + " de points de vie, " + target.hp + " points de vie restants " + "</p>"';
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
                    highscore++;
                    // insérer la fonction loot
                    loot();
                }       
                else if(player.hp <= 0) {
                    var gameover = '"<p>" + "Défaite ! vous avez été vaincu par " + target.name + "</p>"';
                    showMessageLog(gameover);
                    endGame();
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
                    var attackPlayerVsTarget = '"<p>" + player.name + " attaque " + target.name + " et lui inflige " + monsterStrength + " points de dégats " + "</p>"';
                    showMessageLog(attackPlayerVsTarget);

                    target.hp = target.hp - monsterStrength;

                    var textTargetVsPlayer = '"<p>" + target.name + " perds " + monsterStrength + " de points de vie, " + target.hp + " points de vie restants " + "</p>"';
                    showMessageLog(textTargetVsPlayer);
                }
                else if(target.hp <= 0) {
                    var victory = '"<p>" + "Félicitations ! " + player.name + " a remporté la victoire. Butin remporté : " + "</p>"';
                    showMessageLog(victory);
                    highscore++;
                    // insérer la fonction loot
                    loot();
                }       
                else {
                    var gameover = '"<p>" + "Défaite ! vous avez été vaincu par " + target.name + "</p>"';
                    showMessageLog(gameover);
                    endGame();
                    // insérer la fonction fin de partie
                }
            }
        }
    }
    target.hp = target.stamina;
    monsterStrength+1;
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
    }, 3000); // 3s de délai
}

function start () {
    let insert = prompt("Entrez votre nom pour debuter la partie .");
    if(insert == null || insert == ''){
        start();
    }
    else {
        player.name = insert;
        console.log(player.name);
        timer = setInterval(function(){
            if(night == true) {
                night = false;
            }else {
                night = true;
            }
        
            if(isAttack == true) {
                updateBackground(night);
            }
        
        }, 45000);
        //on lancera la grosse fonction aventure
    }
}

function useItem(potion){
    if(potion == undefined) {
        return false;
    }
    if(potion == "strengthPotion" && player.inventory.strengthPotion > 0) {
        monsterStrength++;
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
    }else if(potion == "hpPotion" && player.inventory.hpPotion > 0 || 
     potion ==  "monsterHpPotion" && player.inventory.monsterHpPotion > 0) {
        if(player.hp + 20 > player.stamina || player.hp + 10 > player.stamina) {
            player.hp = player.stamina;
        }else {
            if(potion == "hpPotion")
            {
                player.hp += 20;
            }else {
                player.hp += 10;
            }
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
   player.po += 3;
   dropPourcentage();
   if(dropPourcentage() == true){
    player.inventory.monsterHpPotion + 1;
     }
}

 

function dropPourcentage() {
    var resultPlayer = 0.1;
    var resultIA = Math.random();
    if(resultPlayer < resultIA ) {
        return true;
    }
    else{
        return false;
    }
}

        

function buy (id) {

 if (id == 1 && player.po >= shop.strengthPotion.price){
    message("Vous avez acheté une potion de force");
    player.po = player.po - shop.strenghtPotion.price;
    player.inventory.strenghtPotion += 1;
}else if (id == 2 && player.po >= shop.agilityPotion.price){
    message("Vous avez acheté une potion de force");
    player.po = player.po - shop.agilityPotionp.price;
    player.inventory.agilityPotion += 1;
}else if (id == 3 && player.po >= shop.staminaPotion.price){
    message(" Vous avez acheté une potion d'endurance");
    player.po = player.po - shop.staminaPotion.price;
    player.inventory.staminaPotion += 1;
}else if (id == 4 && player.po >= shop.hpPotion.price){
    message(" Vous avez acheté une potion de vie");
    player.po = player.po - shop.hpPotion.price;
    player.inventory.hpPotion += 1; 
}else {
    message("Vous n'avez pas assez de pièces d'or");
}

}
 

function endGame() {
    scoring[scoring.length] = [];
    scoring[scoring.length - 1]["name"] = player.name;
    scoring[scoring.length - 1]["score"] = highscore;

    // Insérer la mise en page du score

    message("<p>Tu as perdu brave héro</p><p>Tu as " + highscore + " de points de score.<p>Ta mémoire sera gravé dans le Panthéon</p>")
}

document.getElementById("restart").addEventListener('click', function(){
    player = params;
    monster = paramsMonster;
    start();
});

document.getElementById("goshop").addEventListener("click", function() {
    isAttack = false;
    updateBackground("assets/tavern.jpg");

})

/*************************
 *                       *
 * Fonction d'événements *
 *                       *
 *************************/


 /*************************
 *                       *
 * Fonction d'achat      *
 *                       *
 *************************/

 // Boutique
 for(let i = 1; i <= 4; i++){
     console.log("ok");
     document.getElementById("buy"+i).addEventListener("click", function(){
        buy(i);
     })
 }