function loadUserData () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("a")
        },1000)
    })
}
function loadBooks (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject ("Error while downloading books")
            }, 1000)
        })
}
function loadPets(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("C")
            }, 1000)
        })
}       
async function render () {
    const user =await loadUserData ()
    let books 
    loadBooks()
        .then(res => {
            books = res
        })
        .catch (err => {
            console.log(err)
            books=""
        })

    const pets = await loadPets ()
    console.log(user,books,pets)
}

window.onload = function () {
    render ()
}