import { Character } from "./../src/character.js";
import { Monster } from "./../src/character.js";

describe("Character", () => {
  let reusableCharacter;
  let reusableMonster1;
  let reusableMonster2;
  beforeEach(() => {
    reusableCharacter = new Character("The Dude", 10);
    reusableMonster1 = new Monster("Ogre", 10, 4, 5);
    reusableMonster2 = new Monster("Goblin", 4, 2, 4);
  });



  test("Should correctly create a character object with name, hp, level, xp and attributes", () => {
    expect(reusableCharacter.name).toBe("The Dude");
    expect(reusableCharacter.hp).toBe(10);
    expect(reusableCharacter.xp).toBe(0);
    expect(reusableCharacter.level).toBe(1);
    expect(reusableCharacter.attributes).toEqual({str: 10, dex: 10, con: 10, int: 10, cha: 10});
  });

  test("Should correctly create a monster object with name, hp, xp awarded and attack strength", () => {
    expect(reusableMonster2.name).toBe("Goblin");
    expect(reusableMonster2.hp).toBe(4);
    expect(reusableMonster2.atk).toBe(4);
    expect(reusableMonster2.xpAwarded).toBe(2);
  });

  test("Should correctly run a method to calculate an attack roll by the character object", () => {
    expect(reusableCharacter.attackRoll()).toEqual(5);
  });

  test("Should correctly run a method to calculate an attack roll by the monster object", () => {
    expect(reusableMonster2.attackRoll()).toEqual(4);
  });

  test("Should subtract the value of an object's attack roll from the hp of the target of the attack", () => {
    expect(reusableCharacter.attackMonster(reusableMonster1).hp).toEqual(5);
  });

  test("Should subtract the value of the monster object's attack roll from the hp of the target of the attack", () => {
    expect(reusableMonster2.attackCharacter(reusableCharacter).hp).toEqual(6);
  });

  test("Should award the character object with xp when the monster object's hp is reduced to 0 or below as a result of the attackMonster() method", () => {
    expect(reusableCharacter.attackMonster(reusableMonster2).xp).toEqual(2);
  });

});