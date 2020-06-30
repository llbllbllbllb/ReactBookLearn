
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

// const getFakeMembers = count => new Promise((resolve,reject) => {
//     const api = `https://api.randomuser.me/?nat=US&results=${count}`
//     const request = new XMLHttpRequest()
//     request.open('GET',api)
//     request.onload = () => {
//         return resolve(request.status)
//     }
//     request.onerror = (err) => {
//         console.log("error here ")
//         return reject(err)
//     }
//     request.send()
// })

// getFakeMembers(5).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })