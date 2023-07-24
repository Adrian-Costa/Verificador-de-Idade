
function verificar(){

    var agora = new Date()
    var anoa = agora.getFullYear()
    var nas = window.document.getElementById("adn")
    var res = window.document.getElementById("rest")

if (nas.value.length == 0 || Number(nas.value) > anoa){
    window.alert('[ERRO] Insira um número válido!')
} else {
    var gen = window.document.getElementsByName("sex")
    var idade = anoa - Number(nas.value)
    var sexo = ''
    var img = window.document.createElement('img')
    img.setAttribute('id','foto')

    if(gen[0].checked){
        var sexo = 'Homem'

        if(idade < 16){
            img.src = ''
        } else if (idade < 20){
            img.src = ''
        } else if (idade < 65){
            img.src = ''
        } else {
            img.src = ''
        }

    } else {
        var sexo = 'Mulher'

        if(idade < 16){
            img.src = ''
        } else if (idade < 20){
            img.src = ''
        } else if (idade < 65){
            img.src = ''
        } else {
            img.src = ''
        }
    }
}
    
    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
}