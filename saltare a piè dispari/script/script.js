const numeriPari=[];

for (let i=0; i<6; i++){
    let userNumber=(prompt("inserisci un numero"));

    if(userNumber %2==0){
        numeriPari.push(userNumber)
    }

    
}

console.log(numeriPari)