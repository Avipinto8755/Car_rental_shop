export class Shop {
  constructor(shopName) {
    this.shopName = shopName;
    this.allCarsInStock = [];
  }
  printAllCarsInStock() {
    console.log(this.allCarsInStock);
  }
  addNewCarToShop(newCar) {
    this.allCarsInStock.push(newCar);
  }
}
