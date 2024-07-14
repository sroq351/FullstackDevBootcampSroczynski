function doSomething (){
return  new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Data downloaded succesfully")
        reject("error while data downloading")
    }, 5000)
})
}
doSomething ()
    .then (result => {
        console.log ("Success")
        console.log ("Success")
        console.log ("Success")
        console.log ("Success")
        console.log ("Success")
        console.log ("Success")
    })
    .catch(error => {
        console.log(error)
    })
