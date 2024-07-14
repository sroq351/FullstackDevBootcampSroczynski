function doThings(){
    return Promise.resolve ("ok")
}
doThings () 
    .then (res => {
        console.log (res)
    })


// async
async function doThingsAsync () {
    return "ok async"
}

doThingsAsync ()
    .then (res => {
        console.log (res)
    })