import { Character } from "./../src/character.js";
import { Monster } from "./../src/character.js";

describe("Character", () => {
  let reusableCharacter;
  let reusableOgre;
  let reusableGoblin;
  beforeEach(() => {
    reusableCharacter = new Character("The Dude", 10);
    reusableOgre = new Monster("Ogre", 10, 4, 5);
    reusableGoblin = new Monster("Goblin", 4, 2, 4);
  });



  test("Should correctly create a character object with name, hp, level, xp and attributes", () => {
    expect(reusableCharacter.name).toBe("The Dude");
    expect(reusableCharacter.hp).toBe(10);
    expect(reusableCharacter.xp).toBe(0);
    expect(reusableCharacter.level).toBe(1);
    expect(reusableCharacter.attributes).toEqual({str: 10, dex: 10, con: 10, int: 10, cha: 10});
  });

  test("Should correctly create a monster object with name, hp, xp awarded and attack strength", () => {
    expect(reusableGoblin.name).toBe("Goblin");
    expect(reusableGoblin.hp).toBe(4);
    expect(reusableGoblin.atk).toBe(4);
    expect(reusableGoblin.xpAwarded).toBe(2);
  });

  test("Should correctly run a method to calculate an attack roll by the character object", () => {
    expect(reusableCharacter.attackRoll()).toEqual(5);
  });

  test("Should correctly run a method to calculate an attack roll by the monster object", () => {
    expect(reusableGoblin.attackRoll()).toEqual(4);
  });

  test("Should subtract the value of an object's attack roll from the hp of the target of the attack", () => {
    expect(reusableCharacter.attackMonster(reusableOgre).hp).toEqual(5);
  });

  test("Should subtract the value of the monster object's attack roll from the hp of the target of the attack", () => {
    expect(reusableGoblin.attackCharacter(reusableCharacter).hp).toEqual(6);
  });

  test("Should award the character object with xp when the monster object's hp is reduced to 0 or below as a result of the attackMonster() method", () => {
    expect(reusableCharacter.attackMonster(reusableGoblin).xp).toEqual(2);
  });

  test("Should level up the character from level 1 to level 2 after slaying reusableGoblin", () => {
    reusableCharacter.xp = 98;
    expect(reusableCharacter.attackMonster(reusableGoblin).level).toEqual(2);
    console.log(reusableCharacter.xp);
  });

});