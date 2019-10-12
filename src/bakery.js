// Up to you to decide what goes here based on the tests...
class Bakery {
  constructor(name = 'Eliots Bakery') {
    this.name = name;
  }
  bake(item) {
    let bakedItem = {
      type: item,
      consume() {
        this.counter++;
        if (this.counter <= 1) {
          return true;
        } else {
          return false;
        }
      },
      counter: 0,
      price: 0,
    };
    return bakedItem;
  }

  price(item, price) {}
}

module.exports = Bakery;
