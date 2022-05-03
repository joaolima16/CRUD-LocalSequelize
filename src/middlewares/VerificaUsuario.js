const VerificaUsuario  = async(user)=>{
    if(user===null){
        console.log("Usúario incorreto!")
    }
    else{
        console.log("Deu Certo")
    }
}
module.exports = VerificaUsuario;