import { Character } from "./../src/character.js";
import { Monster } from "./../src/character.js";

describe("Character", () => {
  let reusableCharacter;
  let reusableMonster;
  beforeEach(() => {
    reusableCharacter = new Character("The Dude", 10);
    reusableMonster = new Monster("Goblin", 4, 4)
  });



  test("Should correctly create a character object with name, hp, xp and attributes", () => {
    expect(reusableCharacter.name).toBe("The Dude");
    expect(reusableCharacter.hp).toBe(10);
    expect(reusableCharacter.attributes).toEqual({str: 10, dex: 10, con: 10, int: 10, cha: 10});
    expect(reusableCharacter.xp).toBe(0);
  });

  test("Should correctly create a monster object with name, hp, xp awarded and attack strength", () => {
    expect(reusableMonster.name).toBe("Goblin");
    expect(reusableMonster.hp).toBe(4);
    expect(reusableMonster.atk).toBe(4);
    expect(reusableMonster.xpAwarded).toBe(2);
  });

  test("Should correctly run a method to calculate an attack roll by the character object", () => {
    expect(reusableCharacter.attackRoll()).toEqual(5);
  });

  test("Should correctly run a method to calculate an attack roll by the monster object", () => {
    expect(reusableMonster.attackRoll()).toEqual(4);
  });

  test("Should subtract the value of an object's attack roll from the hp of the target of the attack", () => {
    expect(reusableCharacter.attackMonster(reusableMonster)).toEqual(-1);
  });

  test("Should subtract the value of the monster object's attack roll from the hp of the target of the attack", () => {
    expect(reusableMonster.attackCharacter(reusableCharacter)).toEqual(6);
  });

});