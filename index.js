// //console.log('Hello World');
// let name='Vamsi';
// //@its-ignore
// console.log(name);
// let firstName="Vamsi";
// let  lastName='Teja';
// console.log(firstName,lastName);


// let interestRate=0.3;
// interestRate =1;
// console.log(interestRate);

// let name ='vamsi'; // string literal
// let age=21; //number literal
// let isApproved= false; //boolean
// let firstName=undefined;
// let selectedColor =null;
// console.log(name,age,isApproved,firstName,selectedColor);

//Static and Dynamic Language example in Java Script
//type of the variable can be changed at the run time 

//Vamsi Teja Reddy

const display=document.getElementById("display");

function appendToDisplay(input){
display.value +=input;
}
function clearDisplay(){
    display.value= "";
}
function calculate(){
    try{
        display.value =eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function deleteTheLastEntry(entry) {
    display.value = display.value.slice(0, -1);
    // Add your logic to delete the last entry here
}
