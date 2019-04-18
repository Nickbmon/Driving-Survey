var firstName1;
var lastName1;
var age1;
var birthday1;
var eyeColor1;

var data = {
    firstName: "",
    lastName: "",
    age: 0,
    Birthday: "",
    eyeColor: "",
    checkAge: function(){
    if (this.age < 16){
    alert("Your not old enough -_-");
    }else if(this.age === 16){
    alert("Driver allowed to have a permit");
    }else if(this.age === 17){
    alert("Driver allowed to have a permit");
    }else{
    alert("Drivers license allowed");      
        }
      },
    Info: function(){
        document.querySelector(".target").innerHTML = this.firstName + "<br>" + this.lastName + "<br>" + this.eyeColor + "<br>" + this.Birthday ;
       
            }
    };
document.getElementById('btn').addEventListener('click', function() {
var formInput = document.getElementById("numberForm");
 firstName1 = document.querySelector(".iptOne").value;
console.log(firstName1);
 lastName1 = document.querySelector(".iptTwo").value;
console.log(lastName1);
 age1 = document.querySelector(".ageIpt").value;
console.log(age1);
 birthday1 = document.querySelector(".birthIpt").value;
console.log(birthday1);
var r = formInput.eye.value;
console.log(r);
var age3 = parseInt(age1);
console.log(age3);  
data.firstName = firstName1;
data.lastName = lastName1;
data.age = age3;
console.log(age3);
data.Birthday = birthday1;
data.eyeColor = r;
data.checkAge(age3);
data.Info();
});
