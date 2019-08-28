class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || "Scallywag";
    this.cursed = false;
    this.actsCount = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.actsCount += 1;
    if (this.actsCount > 2) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return "YAARRR!";
  }

};

module.exports = Pirate;
