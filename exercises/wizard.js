class Wizard {
  constructor(obj) {
    this.name = obj.name;
    this.bearded = true;
    this.isRested = true;
    this.castCount = 0;
    if (obj.bearded !== undefined) {
      this.bearded = obj.bearded;
    }
  }

  incantation(phrase) {
    return phrase.toUpperCase();
  }

  cast() {
    this.castCount++;
    if (this.castCount > 2) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }
    return 'MAGIC BULLET';
  }
};

module.exports = Wizard;
