class Errologin extends Error {
    
    constructor(name, message){

        super(message)

        this.name = name

    }
}

try {
    
    let email = "hannahgoes@hotmail.com"
    //forçando erro
    let senha = "123458"

    //forçando erro
    let emailSistema = "hannahgoe7s@hotmail.com"
    let senhaDoSistema = "123456"

    if (senha == senhaDoSistema && email == emailSistema) {
        console.log("Acesso autorizado")
    }else{
        
        let erroLogin = new Errologin("Errologin", "Credenciais do usuário estão incorretas!")

        throw erroLogin

    }

} catch (erro) {
    console.log(erro.name)
    console.log(erro.message)
}