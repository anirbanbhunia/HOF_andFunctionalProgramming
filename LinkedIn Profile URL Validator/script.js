const validProfile = "https://www.linkedin.com/in/aman-gupta-7217a515/"

const regEx = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/gi

function cheack(str){
    if(regEx.test(str)){
        console.log("Valid LinkedIn profile")
    }else{
        console.log("Invalid LinkedIn profile")
    }
}
cheack(validProfile)