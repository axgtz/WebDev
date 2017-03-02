var bio = {
    name: 'Omar',
    age: 19,
    gender: 'male',
    size: {
        top: 90,
        middle: 60,
        bottom: 90
    },
    printToString: function() {
        console.log(this.name + " " + this.age + " " + this.gender);
    }
};

console.log(bio.name);
console.log(bio.size.top);
bio.printToString();

function Animal(name) {
    this.name = name;
    this.pic = "pic.jpg";
    this.age = 15;
    this.makeSound = function() {
        console.log("Awwwwa");
    }
}

var fox = new Animal("Fox");
fox.age = 19;
fox.makeSound();