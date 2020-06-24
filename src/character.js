export class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.xp = 0;
    this.attributes = {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      cha: 10
    };
  }

  attackRoll() {
    let attack = this.attributes.str / 2;
    return attack;    
  }

  attackMonster(monster) {
    monster.hp = monster.hp - this.attackRoll();
    return monster.hp;
  }
}

export class Monster {
  constructor(name, hp, xpAwarded, atk) {
    this.name = name;
    this.hp = hp;
    this.xpAwarded = xpAwarded;
    this.atk = atk;
  }

  attackRoll() {
    return this.atk;
  }

  attackCharacter(character) {
    character.hp = character.hp - this.attackRoll();
    return character.hp;
  }
}