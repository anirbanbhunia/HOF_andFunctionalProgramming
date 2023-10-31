let delay = 3
function coundown(){
    if(delay > 0){
        console.log(`Your remaining time is: ${delay}s`)
        delay--
    }else{
        clearInterval(t)
        let ran = Math.floor(Math.random()*(100-1)+1)
        console.log("Your random number is: "+ran)
    } 
}
let t = setInterval(coundown,1000)

