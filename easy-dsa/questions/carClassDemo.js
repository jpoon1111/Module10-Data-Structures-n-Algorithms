class Car {

    constructor (brand,year){ 
        this.brand = brand; 
        this.year = year; 
    }

    getAge() {
        const year = new Date().getFullYear();
        return year -this.year
    }
    print() {
        console.log(`${this.brand} is ${this.getAge()} years old.`);
    }
    
}


const sportsCar = new Car('BMW', 2014);

sportsCar.print();










// class Car {

//     constructor (brand,year){ 
//         this.brand = brand; 
//         this.year = year; 
//     }

//     getAge() {
//         const year = new Date().getFullYear();
//         return year -this.year
//     }
//     print() {
//         console.log(`${this.brand} is ${this.getAge()} years old.`);
//     }
    
// }


// const sportsCar = new Car('BMW', 2014);







// class Ring {

//     constructor (gem,color){ 
//         this.gem = gem; 
//         this.color = color; 

//     }
//     print() {
//         consol.log(` {this.gem} ${this.color} } ring.`);
//     }
    

// }

// const sapphireRing = new Ring("saphhire", "gold");

// const rubyRing = new Ring("ruby", "gold");

// const diamondRing = new Ring("diamond", "gold");

// consol.log(sapphireRing.gem, sapphireRing.color);// this will give the value for gem and color
// consol.log(rubyRing.print());// this will give undefined if no value is returned from rubyRing.print() since we call print but return nothing therefore undefined
// diamondRing.print();// this will console.log(diamondRing gem and color value) because we are calling it directly for it to run console.log()  