function validation(){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let city = document.getElementById('city').value
    let mno = document.getElementById('mno').value
    let frname = document.getElementById('frname').value

    localStorage.setItem("NAME",name)
    localStorage.setItem("AGE",age)
    localStorage.setItem("CITY",city)
    localStorage.setItem("MNO",mno)
    localStorage.setItem("FRNAME",frname)


    
}


let g = localStorage.getItem("NAME")
document.write(g)
let h = localStorage.getItem("AGE")
document.write(h)
let i =  localStorage.getItem("CITY")
document.write(i)
let j =  localStorage.getItem("MNO")
document.write(j)
let k =  localStorage.getItem("FRNAME")
document.write(k)