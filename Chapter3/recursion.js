// const countDown = (val,fn) => {
//     fn(val)
//     return (val>0) ? countDown(val-1,fn) : null
// }

// countDown(10,(val)=>console.log(val))


// const countDown = (val, fn, delay=1000) =>{
//     fn(val)
//     if(val>0){
//         setTimeout(()=>countDown(val-1,fn),delay)
//     }
    

// }

// countDown(10,(val)=>console.log(val))

var dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname:{
                first: "Dan",
                last: "Deacon"
            }
        }
    }
}

const deepPick = (fields,object={}) => {
    const [first, ...remaining] = fields.split(".")
    return (remaining.length) ? deepPick(remaining.join("."), object[first]) : object[first]
}

// console.log(deepPick("type",dan))
console.log(deepPick("data.info.fullname.last",dan))
// console.log(dan.data.info.fullname.last)