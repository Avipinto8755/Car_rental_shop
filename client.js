export class Client {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.rentedCars = [];
  }
  addNewCar(newCar) {
    this.rentedCars.push(newCar);
  }
  printCarsOfClient() {
    console.log(this.rentedCars);
  }
}
