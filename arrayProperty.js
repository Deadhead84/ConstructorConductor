//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here

String.prototype.reversed = function(a) {
	console.log(a.split("").reverse().join(""))
}

var test = "Will this work?";
test.reversed(test);

var newCar = "2007 Subaru Outback";
newCar.reversed(newCar);