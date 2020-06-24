export class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.level = 1;
    this.xp = 0;
    this.inventory = {
      weapon: 0,
      armor: 0
    }
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
        
    if (monster.hp <= 0) {
      this.xp += monster.xpAwarded;
      if (this.xp >= (this.level * 10)) {
        this.level++;
      }
      return this;
    }
    else{
      return monster;
    }
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
    return character;
  }
}