var allAnimals=[];
var id=0;

$(document).ready(function(){
    run();
});

function run() {
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var gemma = new Giraffe("Gemma");
    var rarity = new Unicorn("Rarity");
    var stinger = new Bee("Stinger");
    listAnimals();
}

function createAnimal(){
    var name=$("#animalName").val();
    var type=$("#animalType").val();
    switch(type){
          case "Tiger":
                new Tiger(name);
                break;
            case "Bear":
                new Bear(name);
                break;
            case "Giraffe":
                new Giraffe(name);
                break;
            case "Unicorn":
                new Unicorn(name);
                break;
            case "Bee":
                new Bee(name);
        }
    listAnimals();
    $("#yourFeed").empty();
    $("#yourFeed").append("Your Feed <br>");
    $("#yourFeed").append(name + " has been created");

}

function feedAnimals() {
    $("#yourFeed").empty();
    $("#yourFeed").append("Your Feed <br>");
    for(var i=0; i<allAnimals.length;i++){
        allAnimals[i].eat($("#foodChoice").val());
    }
}
function listAnimals(){
    $("#animalList").empty();
    for(var i=0; i<allAnimals.length;i++){
        var newRow=document.createElement("tr");
        var newAnimalName=document.createElement("td");
        var newAnimalType=document.createElement("td");
        newAnimalName.innerHTML=allAnimals[i].name;
        newAnimalType.innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + allAnimals[i].type;
        newAnimalName.setAttribute("class", "w3-hover-gray");
        newAnimalName.setAttribute("id", allAnimals[i].id);
        $("#animalList").append(newRow);
        newRow.appendChild(newAnimalName);
        newRow.appendChild(newAnimalType);
        $("#"+ allAnimals[i].id).click(function(){
            deleteAnimal($(this).attr("id"));
        });
    }
}

function deleteAnimal(identifier){
    var name = "";
    for(var i=0;i<allAnimals.length;i++){
        if(allAnimals[i].id==identifier){
            name = allAnimals[i].name;
            allAnimals.splice(i, 1);
            break;
        }
    }
    listAnimals();
    $("#yourFeed").empty();
    $("#yourFeed").append("Your Feed <br>");
    $("#yourFeed").append(name + " has been removed");
}

class Animal {

    constructor(name, favoriteFood, type) {
        this.name=name;
        this.favoriteFood= favoriteFood;
        this.type=type;
        this.id = id;
        id++;
        allAnimals.push(this);
    }

    sleep() {
        $("#yourFeed").append(this.name + " sleeps for 8 hours <br>");
    }

    eat(food) {
        $("#yourFeed").append(this.name + " eats " + food + "<br>");
        food==this.favoriteFood ? $("#yourFeed").append("YUM!!! " + this.name + " wants more " + food + "<br>") : this.sleep();
    }

}

class Tiger extends Animal{
    constructor(name) {
        super(name, "meat", "Tiger");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish", "Bear");
    }

    sleep() {
        $("#yourFeed").append(this.name + " hibernates for 4 months <br>");
    }
}

class Unicorn extends Animal{
    constructor(name) {
        super(name, "marshmallows", "Unicorn");
    }

    eat(food) {
        if(food==this.favoriteFood) {
            $("#yourFeed").append(this.name + " eats " + food + "<br>");
            $("#yourFeed").append("YUM!!! " + this.name + " wants more " + food + "<br>");
        }
        this.sleep();
    }

    sleep() {
        $("#yourFeed").append(this.name + " sleeps in a cloud <br>");
    }
}

class Giraffe extends Animal{
    constructor(name) {
        super(name, "leaves", "Giraffe");
    }

    eat(food) {
        if(food==this.favoriteFood){
            $("#yourFeed").append(this.name + " eats " + food + "<br>");
            $("#yourFeed").append("YUM!!! " + this.name + " wants more " + food + "<br>");
            this.sleep();
        }else{
            $("#yourFeed").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
        }
    }

    sleep() {
        $("#yourFeed").append(this.name + " sleeps for 8 hours <br>");
    }
}

class Bee extends Animal{
    constructor(name) {
        super(name, "pollen", "Bee");
    }

    eat(food){
        if(food==this.favoriteFood){
            $("#yourFeed").append(this.name + " eats " + food + "<br>");
            $("#yourFeed").append("YUM!!! " + this.name + " wants more " + food + "<br>");
            this.sleep();
        }else{
            $("#yourFeed").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
        }
    }

    sleep() {
        $("#yourFeed").append(this.name + " never sleeps <br>");
    }
}