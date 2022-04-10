interface Actions<T> {
    currentPerc: T;
    percPerKm: T;
    drive(dist: T): void;
    recharge(perc: T): void;
}
