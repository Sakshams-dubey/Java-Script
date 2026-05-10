// Do While, While, For, For in, For of, For each 

// Do while

// do{
     //code
// } while(condition)

// print 1-5

// let a=1
// do{
//     console.log(a)
    // a++
// }
// while(a<6)

// print 5-1

// let a=5
// do{
//     console.log(a)
//     a--
// }
// while(a>=1)

// print table

// let a = parseInt(prompt("enter a :- "))
// let i=1
// do{
//     console.log(a*i)
//     i++
// }
// while(i<=10)


//While loop

// while(condition){
//     code
// }

// print saksham 15 times 

// let x =1
// while(x<16){
//     document.write("saksham","<br></br>")
//     x++
// }


// Q1)WAP to print sum of all digits between 10-1 while loop.

// let a=10
// let sum=0
// while(a>=1){
//     sum=sum+a
//     a--
// }
// console.log(sum)

// Q2) WAP to print square off all even numbers between 5-15 while loop.

// let a = 5
// while(a<=15){
//     a++
//     if(a%2==0){
//         console.log(a*a) agr m yahan ek or variable leta to ??
//     }
// }
// console.log(a)

// Q3) WAP to print square of all numbers between 1-10 using while loop.

// let a = 1
// while(a<=10){
//     let square = a*a
//     console.log(square)
//     a++
// }



// Q4) WAP to take input in every condition using do while.

// let a = prompt("enter anything")

// do{
//    var a = prompt("enter anything")
// }
// while(a!=0) 


// For loop

// for(init ; condition ; in/dec){
//     code
// }

// for(let ex=2 ; ex<=10 ; ex++){
//     console.log(ex)
// }


// let num = parseInt(prompt("enter any number"))
// for(let a=10 ; a>=1 ; a--){
//     console.log(num*a)
// }


// let num = parseInt(prompt("enter any number"))

// if(num>=1 && num<=5){
//     for(let a=1 ; a<=10 ; a++)
//     console.log(num*a)
// }
// else if(num>=6 && num<=10){
//     for(let a=10 ; a>=1 ; a--){
//         if(a%2==0){
//              console.log(a*a)
//         }
//     }
// }
// else{  console.log(INVALID)}


// Basics syntax of nested loop

// for(int ; condition ; ++/--)
//     {
//     for(int ; condition ; ++/--)
//         {

//     }
// }

// print table of 2 and 3

// for(let a=2 ; a<=3 ; a++)
//     {
//     for(let b=1 ; b<=10 ; b++)
//         {
//             console.log(a*b)
//     }
// }

// print pattern 
// *
// **
// ***
// ****
// *****

// for(let row=1 ; row<=5 ; row++)
// {
//     for(let column=1 ; column<=row ; column++)
//     {
//         document.write("*")
//     }
//     document.write("<br></br>")
// }

// print pattern 
// *****
// ****
// ***
// **
// *

// for(let row=1 ; row<=5 ; row++)
// {
//     for(let column=5 ; column>=row ; column--)
//     {
//         document.write("*")
//     }
//     document.write("<br></br>")
// }

// print pattern 
// *****
// *****
// *****
// *****

// for(let row=1 ; row<=4 ; row++)
// {
//     for(let column=1 ; column<=4 ; column++)
//     {
//         document.write("*")
//     }
//     document.write("<br></br>")
// }

// print pattern 
// *****
// *   *
// *   *
// *   *
// *****

// {
//     for(let column=1 ; column<=5 ; column++)
//     {
//         document.write("*")
//         for(let column=1 ; column<=5 ; column++){
//             document.write("&nbsp  ")
//         }
//     }
//     document.write("<br>")
// }

// for(let a=1 ; a<=3 ; a++)
// {
//     document.write("*","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","&nbsp","*")
//     document.write("<br></br>")
// }
// {
//     for(let column=1 ; column<=5 ; column++)
//     {
//         document.write("*")
//         for(let column=1 ; column<=5 ; column++){
//             document.write("&nbsp  ")
//         }
//     }
//     document.write("<br>")
// }



// print pattern
//*****
//  *
//  *
//  * 
//  * 

// for(let row=1 ; row<=5 ; row++)
// {
//     for(let column= 1; column<=5 ; column++)
//     {
//         if(row==1 || column==3){
//             document.write("* ")
//         }
//         else{
//              document.write("&nbsp","&nbsp","&nbsp")
//         }
//     }
//     document.write("<br>")
// }

