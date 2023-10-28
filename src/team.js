export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error("Персонаж уже добавлен в команду");
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach(character => this.members.add(character));
  }

  toArray() {
    const newArray = Array.from(this.members);
    return newArray;
  }

  *[Symbol.iterator]() {
    let newArray = this.toArray();

    for (let index = 0; index < newArray.length; index += 1) {
      yield newArray[index];
    }
  }
}