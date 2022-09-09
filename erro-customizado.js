let x = 101

try {
    
    if (x <= 100) {
        console.log("Número válido")
    }else{

        throw{
            "name": "Número invalido",
            "message": "Qualquer número maior que 100 é inválido"
        }

    }

} catch (error) {
        console.log(error.message)
}finally{
    console.log("Tchau! A execução do código terminou")
}