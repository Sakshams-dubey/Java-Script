function storedata(){
    let a = document.getElementById("name").value
    let b = document.getElementById("city").value
    let c = document.getElementById("field").value
    // alert(a+" "+b+" "+c)
    // document.write(a+" "+b+" "+c)

    document.getElementById("new").textContent=a+b+c

    return false
    
}