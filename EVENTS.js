function fun(){
    alert("working")
}



function demo()
{
    let a=parseInt(prompt("enter number"))
    let b=parseInt(prompt("enter number"))
    let c=a+b
    alert(c)
}


function demo1(){
    document.getElementById("res").textContent="hiiiii"
}



let v = 0

function plus(){
    if(v<10){
    document.getElementById("zero").textContent=++v
    }
}

function minus(){
    if(v>0)
    document.getElementById("zero").textContent=--v
}

function reset(){
    v = 0
    document.getElementById("zero").textContent=v
}







function color(a){
    document.body.style.backgroundColor=a
}



//    let m = document.body


// function red(){
//     m.style.backgroundColor = 'red'
// }

// function green(){

//     m.style.backgroundColor = 'green'
// }

// function yellow(){
   
//     m.style.backgroundColor = 'yellow'
// }

// function blue(){
//     m.style.backgroundColor = 'blue'
// }

// function pink(){
//     m.style.backgroundColor = 'pink'
// }

