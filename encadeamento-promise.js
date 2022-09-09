new Promise(
    function(resolve, rejeita){
        let a = 50;
        let b = 60;

        //resolve a funcao 
        resolve(a + b)
    }
).then(
    //function tradicional
    function(res){
        console.log("Resultado:", res)

        return res 
    }
).then(
    //function tradicional
    function(res){
        console.log("Resultado * 2:", res * 2)
        return res 
    }
).then(
    //function tradicional
    function(res){
        console.log("Resultado * 3:", res * 3)
    }
    //arrow function (mesma coisa só uma sintaxe abreviada)
).catch((erro) => {
    console.log("Erro: ", erro)
}
).finally(
    console.log("Finaliza a Execução")
)