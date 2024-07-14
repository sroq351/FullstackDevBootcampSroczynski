const promise = new promise((resolve,reject) => {
    if 1 ==1 {
        resolve ("ALL OK")
    }else{
        reject ("NOT OK")
    }
    })
    promise.then (result => {
        console.log(result)
    })