function Animal(name, age, kind){
  this.name = name;
  this.kind = kind;
  this.age = age;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return 'I am not a pig'
  }
};

Animal.prototype.growUp = function(){
  return this.age + 1;
}

Animal.prototype.awake = function(){
  this.awake = 'off';
  return this.awake;
}

Animal.prototype.wakeUp = function(){
  this.awake = 'on';
  return this.awake;
}

Animal.prototype.sleep = function(){
  this.awake = 'off';
  return this.awake;
}

Animal.prototype.feed = function(){
  if(this.awake === 'on'){
    return 'feed'
  } else {
    return 'do not feed'
  }
}

module.exports=Animal;
