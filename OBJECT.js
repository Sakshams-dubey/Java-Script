// let student = { name:"saksham", age:34, city:"bhopal"}

// console.log(student)
// console.log(student.city)


// let student = { name:"saksham",
//     age:34, 
//     city:"bhopal",
//     bank:{
//             ac_no:1234,
//             ac_balance:12000
//     },
//     monthly:[300,400,100]
// }

// console.log(student.bank.ac_balance)
// console.log(student.monthly[2])


// let emp ={
//     emp_name:prompt("enter name"),
//     emp_age:prompt("enter age"),
//     emp_city:prompt("enter city"),
// }
    // console.log(emp)



// let emp ={
//     emp_name:"saksham",
//     emp_age:20,
//     emp_city:"bhopal",
// }
// for(let k in emp)
// {
//     console.log(k)
// }


// let obj={
//     "name 1" : "ali",
//     "name 2" : "sameer"

// }
//     console.log(obj["name 1"])


// let news ={
//     name:"saksham",
//     age:19
// }
// for(let k in news)
// {
//     if(k=="name")
//     console.log(k)
// }


// let news ={
//     name:"saksham",
//     age:19
// }
// let k = Object.keys(news)
// console.log(k);
// let v = Object.values(news)
// console.log(v);


// Destructuring of object

// let{ name, city} = {
//     name:"code",
//     city:"bhopal"
// }
// console.log(name);


let ob1 = {
    name:"code",
    city:"bhopal"
}

let ob2 = {
    names:"saksham",
    citys:"berasia"
}

let ob3 = {...ob1,...ob2}

console.log(ob3);
