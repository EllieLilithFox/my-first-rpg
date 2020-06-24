import { Character } from "./../src/character.js";
import { Monster } from "./../src/character.js";

describe("Character", () => {
  let reusableCharacter;
  let reusableMonster;
  beforeEach(() => {
    reusableCharacter = new Character("The Dude", 10);
    reusableMonster = new Monster()
  });



  test("Should correctly create a character object with name, hp, and attributes", () => {
    expect(reusableCharacter.name).toBe("The Dude");
    expect(reusableCharacter.hp).toBe(10);
    expect(reusableCharacter.attributes).toEqual({str: 10, dex: 10, con: 10, int: 10, cha: 10});
  });

  test("Should correctly create a monster object with name, hp, and attack strength", () => {
    expect(reusableMonster.name).toBe("Goblin");
    expect(reusableMonster.hp).toBe(4);
  })
});