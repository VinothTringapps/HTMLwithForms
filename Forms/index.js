let resetfunc=()=>{
    document.getElementById("span").innerHTML=" ";
}
let validate=()=>{
let Name=document.getElementById("name").value;
let phno=document.getElementById("number").value;
let date=document.getElementById("date").value;
let address=document.getElementById("address").value;
let currentDate ="2023-03-10";
if(Name=="" || Name.length<4 ||!Name.match(/^[a-zA-Z]+$/)){   
    document.getElementById("span").innerHTML="please Enter the Correct Name";
    return false;
}
 if(phno=="" || phno.length!=10){
    document.getElementById("span").innerHTML="Please enter the Correct Phone Number";
    return false;
}
 if(address=="" || address.length<10){
    document.getElementById("span").innerHTML="Please enter the Correct Address"
    return false;
}
if(date=="" ||date>=currentDate){
    document.getElementById("span").innerHTML="Please enter the Date";
    return false;
}
else{
    document.getElementById("span").innerHTML=" ";
    console.log("Successfull");
    return true;
}
}

