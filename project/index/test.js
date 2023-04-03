console.log("It is midnight")

let x = 45;
console.log(x);

e = 34;
e = e + 1
console.log(e)

let firstName = "Goodluck";
let age = 20;
let student = false;

console.log("Hello", firstName);
console.log("You are", age,  "years old");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello", firstName
document.getElementById("p2").innerHTML = "You are", age,  "years old"
document.getElementById("p3").innerHTML = "Enrolled", student
var d = 8;
var f = 5;
var g = d + f;
var h = d - f;
// var linebreak = "<br />";
console.log(d > f)
console.log(d < f)
// document.write(linebreak);
console.log(++d)
console.log(--f)
console.log(f <= d)
console.log(f >= d)
// console.log(f++)
console.log(d % f)
console.log(f % d)
console.log(g)
console.log(g > h)
console.log(h >= g)
console.log(h % g)
console.log(g % h)
console.log(f==h)
console.log(g != g)
// console.log(5 && 8) 
console.log(d != f)
console.log(f && d)
var a = true
var b = true
console.log(a && b)
console.log(a || b)
console.log(!(a && b))
console.log(!(a || b))
console.log(d & f)

// age = 12
// if (age < 18){
//     alert("You need to grow")
// }
// else{
//     alert("You are good to go")
// }
// var grade = "G";

// switch (grade) {
//     case "A": console.log("Excellent");
//     break;
//     case "B": console.log("Very Good");
//     break;
//     case "C": console.log("Good");
//     break;
//     case "D": console.log("Pass");
//     break;
//     case "E": console.log("Fair");
//     break;
//     case "F": console.log("Failed");
//     break;
//     default: console.log("Unknown Grade")
    
// }
var grade = "A";

switch (grade) {
    case "A": console.log("Excellent");
    case "B": console.log("Very Good");
    case "C": console.log("Good");
    case "D": console.log("Pass");
    case "E": console.log("Fair");
    case "F": console.log("Failed");
    default: console.log("Unknown Grade")
    
}
//verified 100%
// var funny = "laugh"
// while (funny = "laugh"){
//     window.alert("You are an excellent student, I am so proud of you")
// }
document.getElementById("submit").onclick = function(){
    var MyCheckbox = document.getElementById("Mycheckbox")
    if (MyCheckbox.checked){
        console.log("you are subscribed")
    }
    else{
        window.alert("you are not subscribed")
    }
}
document.getElementById("btn").onclick = function(){
    const Paypal = document.getElementById("paypal")
    const Visa = document.getElementById("visa")
    const Mastercard = {
        console.log("You are paying with Visa")
    }
    else if(Mastercard.checked){
        console.log("You are paying with Mastercard")
    }
    else {
        console.log("You must select a payment type")
    }
}
distance = 5
if (!(distance > 14 && distance < 50)){
    console.log("we are almost there");
}
else {document.getElementById("mastercard")

    if(Paypal.checked){
        console.log("You are paying with Paypal")
    }
    else if(Visa.checked)
    console.log("we still have to walk over")
}
// let grant = "";
// while(grant=="" || grant==null){
//     grant = window.prompt("What is your name?")
// }
// while("F"=="F"){
//     console.log("I'm stuck in JS while loop");
// }
console.log(8)
var count;
for(count=0; count < 10; ++count){
    console.log(count)
}