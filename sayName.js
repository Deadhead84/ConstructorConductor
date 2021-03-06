//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
	this.sayName = function() {
		alert(this.name);
	}
}


//Now create three instances of Person with data you make up

  //code here
var Jon = new Person("Jon", "31");
var Tiff = new Person("Tiff", "31");
var Sophie = new Person("Sophie", "3")


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Jon.sayName();
Tiff.sayName();
Sophie.sayName();