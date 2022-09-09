//forçando erro no tamanho do cpf
let cpf = "000000000000"

try {
    if (cpf.length != 11) {
        
        //criando o erro
        let erroCPF = {
            //criando o nome e a mensagem a exibir quando der erro
             "name": "CpfTamanhoInválido",
             "message": "O tamanho do cpf deve ser igual a 11"
        }
        //lançando o erro
        throw erroCPF
    } else{
        console.log("O tamanho do cpf é válido")
    }
} catch (erro) {
    //exibindo o erro
    console.log(erro.message)
}