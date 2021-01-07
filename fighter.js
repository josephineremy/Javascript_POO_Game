class Fighter extends Character {
    constructor(
      name = "Grace",
      hp = 12,
      mana = 40,
      dmg = 4,
      defense,
      status,
      darkvision = false,
    ) {
      super(name, hp, mana, dmg, defense, status);
    }


    superPower = () => {
        if (this.mana < 20) {
        return console.log(`Il n'a plus assez de points mana pour utiliser le super pouvoir "Darkvision".`);
        }

        let damage = 5;
        console.log(`Sur quel gladiator veux-tu utiliser le super pouvoir "Darkvision" ?`);
        let victim = choseOpponent(this);
        console.log(`${this.name} balance son Darkvision sur ${victim.name}`);
        isInjured(this, victim, damage);
        this.mana -= 20;
    }
}