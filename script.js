"use strict";


init();

function init () {
    document.querySelector("#calculate").addEventListener("click" , read);


}


function read () {
    const firstnum = document.querySelector("#firstnumber").value ;
    const secondnum = document.querySelector("#secondnumber").value ;
    const opera = document.querySelector("#operator").value ;
    console.log(firstnum);
    console.log(secondnum);
    console.log(opera);
    let num1 = Number(firstnum);
    let num2 = Number(secondnum);
    
    if ( opera === "add") {
        let li = document.createElement("li");
        li.innerHTML = num1 + num2 ;
        document.querySelector("#results").appendChild(li);
        document.querySelector("#results").scrollBy(0 , 4454545454545); 
        
    } else if ( opera === "sub" ) {
        let li = document.createElement("li");
        li.innerHTML = num1 - num2 ;
        document.querySelector("#results").appendChild(li); 
        document.querySelector("#results").scrollBy(0 , 4454545454545); 

    } else if ( opera === "mul" ) {
        let li = document.createElement("li");
        li.innerHTML = num1 * num2 ;
        document.querySelector("#results").appendChild(li);
        document.querySelector("#results").scrollBy(0 , 4454545454545);  

    } else if ( opera === "div" ) {
        let li = document.createElement("li");
        li.innerHTML = num1 / num2 ;
        document.querySelector("#results").appendChild(li); 
        document.querySelector("#results").scrollBy(0 , 4454545454545); 

    }
}
