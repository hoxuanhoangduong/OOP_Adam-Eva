let Apple = function (weight) {
    this.weight = weight;

    this.setWeight = function (weight) {
        this.weight = weight;
    };
    this.getWeight = function () {
        return this.weight;
};
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    };
    this.isEmpty = function () {
        return this.weight <= 0;
    };
};

let Human  = function (name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.eat = function (apple) {
        apple.decrease();
    };
    this.say = function (sound) {
        this.say = sound;
        console.log(sound);
    };
    this.checkApple = function (apple) {
        return !apple.isEmpty();
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.isMale = function () {
        if (this.gender = "Male") {
            return true;
        } else {
            return false;
        }
    }
};

let apple = new Apple(10);
let human = new Human("Huyen", "female", 43);

human.eat(apple);
console.log(apple.getWeight());