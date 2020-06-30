var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const getFakeMembers = count => new Promise((resolve,reject) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET',api)
    request.onload = () => {
        return resolve(JSON.parse(request.responseText).results)
    }
    request.onerror = (err) => {
        console.log("error here ")
        return reject(err)
    }
    request.send()
})

// getFakeMembers(5).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

const userLogs = username => message =>{
    console.log(`${username} -> ${message}`)
}
const log = userLogs(`grandpa23`)
getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`)    
).catch((error)=> log(error))