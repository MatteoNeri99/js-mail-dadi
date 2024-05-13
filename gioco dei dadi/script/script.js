const userNumber=Math.floor(Math.random() * (1, 7));

const pcNumber=Math.floor(Math.random() * (1, 7));

console.log(userNumber)
console.log(pcNumber)

if(pcNumber > userNumber){
    console.log("hai perso")
}else if (userNumber > pcNumber){
    console.log("hai vinto")
}else{
   console.log("pareggio")
}