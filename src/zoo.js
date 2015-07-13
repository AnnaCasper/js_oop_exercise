// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
  return this.location;
}

Zoo.prototype.open = function(){
  this.status = 'open';
  return this.status
}

Zoo.prototype.isOpen = function(){
  if(this.status === 'open'){
    return 'is open'
  } else {
    return 'is not open'
  }
}

Zoo.prototype.animals = function(){
  this.animals = [];
  return this.animals;
}

Zoo.prototype.addAnimal = function(animal){
  if(this.status === 'open'){
    if(this.animals.indexOf(animal) < 0){
      this.animals.push(animal);
      return this.animals;
    } else {
      return 'This animal already exists.'
    };
  } else {
    return 'This zoo is closed. No animals can be added.'
  }
}

Zoo.prototype.removeAnimal = function(animal){
  if(this.status === 'open'){
    var location = this.animals.indexOf(animal);
    this.animals.splice(location, 1);
    return this.animals;
  } else {
    return 'This zoo is closed. No animals can be removed.'
  }
}

module.exports=Zoo;
