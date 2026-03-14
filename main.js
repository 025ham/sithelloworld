// const eiei= (num)=>{
//     for (let i = 1;i<13;i++){
//         console.log(num + ' x ' + i + ' = ' + (num * i))
//     }
//             console.log("___________________________")
// }
// eiei(8)
// eiei(11)




// const fruit=['apple','grape','orange']
// for(let i =0;i<fruit.length;i++){
//     console.log(fruit[i])
// }

const users = [
    {name:'alice',age:15},
    {name:'bob',age:22},
    {name:'charlie',age:18},
    {name:'david',age:12},
]
let result =users.filter((check) => {return check.age >= 18})

console.log(result);