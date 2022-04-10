export class ElectricCar<S> implements Actions<number> {
    maker: S;
    color: S;
    currentPerc: number = 100;
    percPerKm: number;

    constructor(consume: number) {
        this.percPerKm = consume;
    }

    drive(dist: number): void {
        let totConsume: number = dist * this.percPerKm;
        this.currentPerc -= totConsume;
    }

    recharge(perc: number): void {
        this.currentPerc += perc;
    }
}