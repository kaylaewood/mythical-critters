class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare(victim) {
    if (this.statues.length < 3) {
      this.statues.push(victim);
      victim.stoned = true;
    } else {
      this.statues[0].stoned = false;
      this.statues.push(victim);
      victim.stoned = true;
      this.statues.shift();
    }
  }
};

module.exports = Medusa;
