const ValidUrl = "https://learn.pwskills.com/lesson/What-is-regex-and-Different-Character-in-Regex-and-importance-Writting-regex-with-example/6405951b182c6770684c4e59/course/Full-Stack-web-development-1.0/63a2ecf58899439c8d7ebdc6"

const regex = /^(https?|http):\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi

function cheackValidUrl(str){
    if(regex.test(str)){
        console.log("valid Url")
    }else{
        console.log("invalid Url") 
    }
}
cheackValidUrl(ValidUrl)