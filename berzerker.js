class Berzerker extends Character {
    constructor(
      name = "Draven",
      hp = 8,
      mana = 0,
      dmg = 4,
      defense,
      status,
    ) {
      super(name, hp, mana, dmg, defense, status);
    }

    superPower = () => {
        if (this.hp == 1) {
          return console.log(`Il n'a plus assez de points de vie pour utiliser le super pouvoir "Rage".`);
        }
        let damage = 5;
        console.log(`Sur quel gladiator veux-tu utiliser le super pouvoir "Rage" ?`);
        let victim = choseOpponent(this);
        console.log(`${this.name} balance son super pouvoir Rage sur ${victim.name} et blesse sa victime d'un point de plus (${damage} au lieu de ${this.dmg}). Mais il perd également un point de vie.`);
        isInjured(this, victim, damage);
        this.hp -= 1;
        this.dmg += 1;
    };
}