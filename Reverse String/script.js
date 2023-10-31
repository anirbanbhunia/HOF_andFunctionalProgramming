const input = "Anirban Bhunia"
const split = input.split("")
const rev = split.reverse()
function reverce(){
    const revStr = rev.join("")
    console.log(revStr)
}
setTimeout(reverce,2000)
