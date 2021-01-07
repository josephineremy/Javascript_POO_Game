class Monk extends Character {
    constructor(
      name = "Moana",
      hp = 8,
      mana = 200,
      dmg = 2,
      defense,
      status,
    ) {
      super(name, hp, mana, dmg, defense, status);
    }

    superPower = () => {
        let heal = 8;
        if (this.mana < 25) {
          return console.log(`Il n'y a plus assez de points mana pour utiliser le super pouvoir "Heal".`);
        }
    
        if (this.hp + heal >= 8) {
          console.log(`${this.name} récupère tous ses points de vie.`);
          this.hp = 8;
        } else {
          console.log(`${this.name} récupère ${heal} points de vie.`);
          this.hp += heal;
        }
        this.mana -= 25;
    };
}