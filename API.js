async function access(){
    let d = await fetch('https://jsonplaceholder.typicode.com/comments')
    let res = await d.json()
    // console.log(res);

    let data = res.map((i)=>`
<tr>
    <td> ${i.id} </td>
    <td> ${i.name} </td>
    <td> ${i.email} </td>
</tr>
`).join("")

document.getElementById('showdata').innerHTML = data

// let vl = res.map((e)=>{return e.name})
// console.log(vl);
    
}

access()

let h=document.querySelector("h1")
console.log(h);

querySelectorAll()