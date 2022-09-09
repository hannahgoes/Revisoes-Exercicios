new Promise(
    function(resolve, rejeita){
        let a = 50;
        let b = 60;

        //forçando um erro na promise variavel c não foi declarada
        //resolve(a + c)

        //resolve a função
        resolve(a + b)
    }
).then(
    //function tradicional
    function(res){
        console.log("Resultado: ", res)
    }
    //arrow function (mesma coisa só uma sintaxe abreviada)
).catch((erro) => {
    console.log("Erro: ", erro)
}
).finally(
    console.log("Finaliza a Execução")
)