class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCount = 0;
  }

  shoot() {
    this.crankyCount ++;
    if (this.crankyCount > 2 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.crankyCount ++;
    if (this.crankyCount > 2 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    }
    return 'Clop clop clop clop!!!'
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else if (this.layingDown === true) {
      this.cranky = false;
      this.crankyCount = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true && this.cranky === true) {
      this.cranky = false;
    } else if (this.standing === true && this.cranky === false) {
      this.cranky = true;
    } else {
      return 'Not while I\'m laying down!';
    }
  }

};

module.exports = Centaur;
