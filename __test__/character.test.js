import { Character } from "./../src/character.js";
import { TestScheduler } from "jest";

describe("Character", () => {
  let reusableCharacter;
  beforeEach(() => {
    reusableCharacter = new Character();
  });



  test("Should correctly create a character object with name, hp, and attributes", () => {
    expect(reusableCharacter.name).toBe("The Dude");
    expect(reusableCharacter.hp).toBe(10);
    expect(reusableCharacter.attributes).toEqual({str: 10, dex: 10, con: 10, int: 10, cha: 10});
  });
});