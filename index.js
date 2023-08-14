const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwOneEl = document.getElementById('pw-left')
let pwTwoEl = document.getElementById('pw-right')

function generatePasswords(){
    let passwordOne = ""
    let passwordTwo = ""

    for(let i = 0; i <15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomIndex]
    }

    for(let i = 0; i <15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomIndex]
    }

    pwOneEl.textContent = passwordOne;
    pwTwoEl.textContent = passwordTwo;
}
