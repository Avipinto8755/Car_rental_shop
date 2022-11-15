export class Car {
  constructor(serialNumber, company, model, engineCapacity, inStock) {
    this.serialNumber = serialNumber;
    this.company = company;
    this.model = model;
    this.engineCapacity = engineCapacity;
    this.inStock = inStock;
  }
  printStock() {
    if (this.inStock == "true") {
      console.log("הרכב  ניתן להשכרה");
    } else if (this.inStock == "false") {
      console.log("הרכב אינו ניתן להשכרה ");
    }
  }
}
