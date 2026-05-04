function validation(){
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let city = document.getElementById('city').value
    let mno = document.getElementById('mno').value

    if(name == ''){
        alert("please enter your name")
        document.getElementById('name').focus()
        return false
    }

    else if(age == ''){
        alert("please enter your age")
        document.getElementById('age').focus()
        return false
    }

    else if( isNaN(age)){
        alert("please enter age in digits")
        document.getElementById('age').focus()
        return false
    }

    else if(age.length>0 || age.length<3 ){
        alert("please enter valid age")
        document.getElementById('mno').focus()
        return false
    }

    

    else if(city == ''){
        alert("please enter your city")
        document.getElementById('city').focus()
        return false
    }

    else if(mno == ''){
        alert("please enter your mobile number")
        document.getElementById('mno').focus()
        return false
    }

    else if( isNaN(mno)){
        alert("please enter mobile number in digits")
        document.getElementById('mno').focus()
        return false
    } 

    else if(mno.length>10 || mno.length<10 ){
        alert("please enter 10 digits mobile number")
        document.getElementById('mno').focus()
        return false
    } 

}

//  HOME WORK age should not be more than 3 digit and not less than 0 and mobile number not more than 10 digit


























