
setInterval (function() {
        let deadline =new Date ("Apr 19, 2055 17:00:00")
        let currentdate = Date.now()
        let remainingTime = deadline - currentdate

        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes =Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000*60))/1000)

 document.getElementById("timer").innerHTML=  days + "d " + hours + "h " +  minutes + "m " + seconds + "s ";
 })
        

