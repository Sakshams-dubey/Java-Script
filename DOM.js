// DOM :- document object model

let r = document.getElementById("head")
console.log(r);

let re = document.getElementById("head2")
console.log(re);

let rea = document.getElementById("head3")
console.log(rea);

let reac = document.getElementById("head4")
console.log(reac);

let react = document.getElementById("head5")
console.log(react);

let reacts = document.getElementById("head6")
console.log(reacts);

let a1 = document.getElementsByTagName("p")
console.log(a1);

let h = document.getElementById('main')
h.textContent = "<i> time is now </i>"

let h1 = document.getElementById('main1')

h1.innerHTML = "<i> asdfg</i>"




        // chaining
// document.getElementById("main2").textContent="asdf"


let m = document.getElementById('main2')

m.style.backgroundColor = 'red'
m.style.color = 'white'
m.style.padding = '20px'


let cl = document.getElementsByClassName('head1')
cl[0].style.backgroundColor='yellow'


let img = document.getElementById('image')
img.src="paneer.jpeg"