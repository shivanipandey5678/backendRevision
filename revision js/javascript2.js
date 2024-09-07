const user={
    name:"shivani",
    age:21,
    address:{
        state:"MP",
        city:"delhi",
        street:{
            location:"abc street",
            pin:123445,
        },
    },
};

const {name,age,address:{state,city,street:{location:meraArea,pin}}}=user;
console.log(meraArea)