import { ElectricCar } from "./ElectricCar";

class Tesla extends ElectricCar<string> {
    maker: string = "Tesla";
    color: string;

    constructor(consume: number, color: string) {
        super(consume);
        this.color = color;
    }
}