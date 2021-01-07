class Game {
    constructor(turnLeft=10, status = true, characters =  charactersArray) {
        this.turnLeft = turnLeft;
        this.status = status;
        this.characters = characters;
    }
} 


initializeCharacters = () => {
    charactersArray = [];
    let character1 = new Fighter();
    let character2 = new Paladin();
    let character3 = new Monk();
    let character4 = new Berzerker();
    let character5 = new Assassin();
    this.charactersArray.push(character1, character2, character3, character4, character5);
}

startGame = () => {
    console.log("");
    console.log("Bienvenue dans le game du kill");
    console.log("");
    initializeCharacters();
    const game = new Game ();
    console.log('----------------------------- Les joueurs de cette partie --------------------------------');
    this.charactersArray.forEach((character) => {
        console.log(`${character.name} a ${character.hp} points de vie et ${character.dmg} points de pouvoir de nuisance !`);
    })

    let i = 1;
    while (game.turnLeft > 0 && charactersArray.length > 1) {
    console.log("")
    console.log(`------------------------------------ TOUR NUMERO ${i}: --------------------------------------`);
    var currentCharacter = charactersArray[Math.floor(Math.random() * charactersArray.length)]
    console.log(`C'est au tour ${currentCharacter.name} de jouer ! Il a ${currentCharacter.hp} points de vie et ${currentCharacter.dmg} points de pouvoir de nuisance !`);
    this.menu(currentCharacter);
    console.log(`Fin du tour de ${currentCharacter.name}`);
    game.turnLeft -= 1;
    i += 1;
    gameStillGoing();
    }
    console.log(`Fin du game`);
    endGame();
}

menu = (character) => {
    console.log('------------------------------------------------------------------------------------------');
    console.log(`Que voulez-vous faire?`);
    console.log(`1. Attaquer un gladiateur`);
    console.log(`2. Utiliser son super pouvoir`)
    let choice = prompt(`Tapez 1 ou 2`)
    switch (choice) {
        case "1" : 
            console.log('------------------------------------------------------------------------------------------');
            console.log(`A qui souhaites-tu faire du mal?`)
            attackedEnemy = choseOpponent(character);
            dealDamage(character, attackedEnemy);
        break;

        case "2":
            character.superPower();
        break;    

        default:
          menuChoice = prompt("Ce choix n'existe pas, veuillez rentrer 1 ou 2");
    }
 
}

function dealDamage(character, attackedEnemy) {
    console.log('------------------------------------------------------------------------------------------');
    console.log(`${character.name} attaque ${attackedEnemy.name} !`)
    let damage = character.dmg;
    isInjured(character, attackedEnemy, damage)
}

function isInjured(character, attackedEnemy, damage) {
    let injury = character.dmg
    attackedEnemy.hp -= injury;
    console.log(`${attackedEnemy.name} a perdu ${injury} points de vie.`);
    if (attackedEnemy.hp <= 0) {
        console.log(`${attackedEnemy.name} est mort.`);
        attackedEnemy.status = "loser";
    }
}

choseOpponent = (currentCharacter) => {
    let opponents = this.charactersArray.slice();
    let currentPlayer = this.charactersArray.indexOf(currentCharacter);
    opponents.splice(currentPlayer, 1);
    let i = 1;
    opponents.forEach((opponent) => {
    console.log(`${i}. ${opponent.name}`);
    i += 1;
    });
    opponentChoice = prompt(`Quel méchant souhaites-tu combattre?`);

    let enemyToAttack = opponents.slice((opponentChoice - 1), opponentChoice);
    let attackedEnemy = enemyToAttack.find(o => o.name);
    alert(`Vous avez choisi d'attaquer ${attackedEnemy.name}`);
    return attackedEnemy;
}


gameStillGoing = () => {
    let ongoingCharacters = new Array();
    this.charactersArray.forEach((character) => {
        if (character.status == "playing") {
            ongoingCharacters.push(character)
        }
    });
    this.charactersArray = ongoingCharacters;
        console.log('----------------------------------- Les survivants ---------------------------------------');
        this.charactersArray.forEach((character) => {
            console.log(`${character.name} a ${character.hp} points de vie et ${character.dmg} points de pouvoir de nuisance !`);
        })
        console.log('------------------------------------------------------------------------------------------');
};

endGame = () => {
    this.charactersArray.forEach((character) => {
      character.status = "winner";
    });
    console.log("---------------------------------- Les grands gagnants ------------------------------------");
    this.charactersArray.forEach((character) => {
        if (character.status == "winner") {
            console.log(`Et un bravo au vaillant ${character.name} qui est toujours vivant après 10 tours de combat sans merci. `);
        }
    });
    console.log('------------------------------------------------------------------------------------------');
  };



  document.getElementById("submit").addEventListener("click", startGame);

