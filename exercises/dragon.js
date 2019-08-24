class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eatCount = 0;
  }

  eat() {
    if (this.eatCount === 0) {
      this.eatCount = 1;
    } else if (this.eatCount === 1){
      this.eatCount = 2;
    } else {
      this.hungry = false;
    }
  }
};

module.exports = Dragon;
