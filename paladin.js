class Paladin extends Character {
    constructor(
      name = "Ulder",
      hp = 16,
      mana = 160,
      dmg = 3,
      defense,
      status,
    ) {
      super(name, hp, mana, dmg, defense, status); }

    superPower = () => {
    if (this.mana < 40) {
      return console.log(`Il n'y a plus assez de points mana pour utiliser le super pouvoir "Lighting".`);
    }

    let damage = 4;
    let heal = 5;
    console.log(`Sur quel gladiator veux-tu utiliser le super pouvoir "Lighting" ?`);
    let victim = choseOpponent(this);
    console.log(`${this.name} balance son Lighting sur ${victim.name}`);
    isInjured(this, victim, damage);
    if (this.hp + heal >= 16) {
      console.log(`${this.name} est également guéri par Lighting`);
      this.hp = 16;
    } else {
      console.log(`${this.name} récupère ${heal} points de vie par Lighting`);
      this.hp += heal;
    }
    this.mana -= 40;
  };
}