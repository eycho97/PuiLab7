/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.image_alt = "Pic of cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.image_alt = "Pig of dog";
}

function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.image = "tiger.jpg";
  this.image_alt = "Pic of tiger";
}

let animals = [new Cat(), new Dog(), new Tiger()]
let names = ["Vincent", "Jacob", "Janice", "Violet"]


function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  var index = generateRandomIndex(names.length);
  return names[index];
}

function generateRandomAge() {
  return generateRandomIndex(10);
}

function generateRandomAnimal() {
  let index = generateRandomIndex(animals.length);
  let randomAnimal = animals[index];

  if (randomAnimal instanceof Cat) 
  {
    return new Cat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Dog) 
  {
    return new Dog(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Tiger) 
  {
    return new Tiger(generateRandomName(), generateRandomAge());
  }
}

/*** Document Load ****/
function onLoad() {

  let animal = generateRandomAnimal();
  console.log(animal)
  document.getElementById("properties").textContent = animal.name + "  " + animal.age + " years old";
  let imageTag = document.getElementById("img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}