export class Character {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.attributes = {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      cha: 10
    };
  }
}

export class Monster {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
}