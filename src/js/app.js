export default class Character {
  constructor(name, health) {
    this.name = name;
    this.level = 1;
    this.health = health;
    this.attack = 40;
    this.defence = 10;
  }

  levelUp() {
    if (this.health <= 0) {
      throw Error('Нельзя повысить уровень убитого');
    } else {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
    }
    return this;
  }
}
