const email=["ioentro@gmail.com", "ioposso@gmail.com", "ancheio@gmail.com","senonentroiononentranessuno@gmail.com"]

const emailUtente=(prompt("scrivi la tua email"))

if(email.includes(emailUtente)){
    console.log("la tua email è presente nella lista")
}else{
    console.log(" la tua email non è presente nella lista")
}