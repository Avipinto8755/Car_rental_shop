import { Client } from "./client.js";
import { Car } from "./car.js";
import { Shop } from "./shop.js";

let aviCar = new Shop("avicar"); //יצירת חנות חדשה בשם אביקאר מתוך מחלקת חנות

let audiA3 = new Car(123, "audi", "a3", "1.5 tsi", "true"); //יצירת רכב אאודי חדש ממחלקת רכב
let seatLeon = new Car(456, "seat", "leon", "2.0 tsi", "true");
let bmwX5 = new Car(789, "bmw", "x5", "2.5 turbo", "false");

aviCar.addNewCarToShop(audiA3); //הוספת אובייקט האאודי שיצרנו לתוך החנות אביקאר שיצרנו
aviCar.printAllCarsInStock(); //הדפסת כלל הרכבים שנמצאים במלאי של אביקאר

audiA3.printStock(); //בדיקה האם הרכב במלאי?

let client1 = new Client("avi", "pinto", "316467612");
client1.addNewCar(seatLeon);
client1.printCarsOfClient();
