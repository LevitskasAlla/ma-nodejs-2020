class Planet {
    constructor(name,diameter) {
      this.name = name;
      this.diameter = diameter;
    }
    volume() {
        return (4/3)*(Math.PI * this.diameter);
    }

    summary() {
        console.log(`Планета ${this.name} має об'єм ${this.volume()} км.куб.​`)
    }
}

class Earth extends Planet {}
let p1 = new Earth ('Земля', 12742)

p1.summary()