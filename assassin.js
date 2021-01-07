class Assassin extends Character {
    constructor(
      name = "Carl",
      hp = 6,
      mana = 20,
      dmg = 6,
      defense,
      status,
      shadowHit = "",
    ) {
      super(name, hp, mana, dmg, defense, status);
      this.shadowHit = shadowHit;
    }

    superPower = () => {
        if (this.mana < 20) {
          return console.log(`Il n'a plus assez de points mana pour utiliser le super pouvoir "Shadow Hit".`);
        }
        let damage = 7;
        console.log(`Sur quel gladiator veux-tu utiliser le super pouvoir "Shadow Hit" ?`);
        let victim = choseOpponent(this);
        console.log(`${this.name} balance son Shadow Hit pour tuer ${victim.name} en lui infligeant une blessure de 7 points.`);
        this.mana -= 20;

        isInjured(this, victim, damage);
        if (victim.status = "loser") {
            console.log(`Il a réussi son coup. Bravo. ${victim.name} est mort.`)
        }
        else {
            console.log(`${this.name} n'a pas réussi son coup. ${this.victim.name} est encore vivant, du coup ${this.name} perd ${damage} points de vie.`);
            this.hp -= damage;
        }
        if (this.hp <= 0) {
            this.status = "loser";
        }
      };
}