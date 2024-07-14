//Write a program that performs a get query for the sample endpoint -> http://httpbin.org/get
async function getResponse() {
    const Response = await fetch ("http://httpbin.org/get")
    if(!Response.ok){
        console.log ("Error" + Response.status)
    }else{
        console.log(Response)
    }
}
window.onload = function () {
    getResponse ()
}

