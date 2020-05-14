function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    var pronoun;
    if (this.gender === 'male') {
        pronoun = 'he likes ';
    } else if (this.gender === 'female') {
        pronoun = 'she likes ';
    } else {
        pronoun = 'they like ';
    }
    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old, and ' + pronoun + interests.slice(0,-1).join(', ') + ' and ' + interests.slice(-1));
  };
  this.greeting = function() {
    console.log('Hi! I\'m ' + this.name.first + '.');
  };
};

var person1 = new Person('Tammi Lee', 'Smith', 32, 'female', ['music', 'skiing', 'kickboxing', 'cleaning']);
console.log(person1.bio());
