console.log("hello world");  // 

// variable declarations  

// three different keywords
// var ,let ,const 

//var c=9;
let k=99;  // always go for let 
const i=989;

let  s=9;  // a variable  should always starts with an alphabet 


// functions --->

// Decides your vacation 


 
function planMytravel(){

    let destination="mauritius";
let hotel ="radisson";
let flight="vistara";
let airporttime=20;
let timetoreachmauritius=5000;

let totaltimeTaken=5600+20;

return totaltimeTaken;

}

// Interest calculation 
/*
let principal=1000;
let rate =9;
let time=1;
let si =(principal*rate*time)/100
console.log(si);


let principal1=10000;
let rate1 =10;
let timeF=2;
let si2 =(principal1*rate1*timeF)/100
console.log(si2);

*/
// function definition ==== plan
function calculteSi(principal ,rate,time){

    let si2 =(principal*rate*time)/100

    return si2;

}

console.log(calculteSi(1000,9,1)) // function call --->you executing your plan
console.log(calculteSi(10000,10,2))

let c=9;
c="hellow";
let elonmusk=[1,2,"sting",'string',true];
console.log(elonmusk);