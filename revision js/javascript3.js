class Animal{
    constructor (leg,tail){
       this.leg=leg,
       this.tail=tail
    }
}

class Herbivorousanimal extends Animal {
    constructor (leg,tail,product){
        super(leg,tail,product);
        this.product=product;
        
      
    }
}

class Cow extends Herbivorousanimal {
    constructor (leg,tail,product,nickname){
        super(leg,tail,product);
        this.product=product;
        this.nickname=nickname;
      
    }
}

let car=new Cow(4,1,"milk","mata");
console.log(car)


