//exemplo de chamada sincrona

function soma (){

    let a = 50;
    let b = 30;

    let c = a + b
    //chamada de função de forma sincrona
    media(c) //80
}

function media (n){
    
    let m = n / 2

    console.log("Média: ", m)
}

soma()



