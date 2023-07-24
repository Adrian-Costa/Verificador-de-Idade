
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

        if(idade >= 0 && idade < 16){
            img.setAttribute('src', 'imagens/homem-c.png')
        } else if (idade >=  16 && idade < 20){
            img.setAttribute('src', 'imagens/homem-j.png')
        } else if (idade >= 20 && idade < 65){
            img.setAttribute('src', 'imagens/homem-a.png')
        } else {
            img.setAttribute('src', 'imagens/homem-i.png')
        }

    } else {
        var sexo = 'Mulher'

        if(idade >= 0 && idade < 16){
            img.setAttribute('src', 'imagens/mulher-c.png')
        } else if (idade >=  16 && idade < 20){
            img.setAttribute('src', 'imagens/mulher-j.png')
        } else if (idade >= 20 && idade < 65){
            img.setAttribute('src', 'imagens/mulher-a.png')
        } else {
            img.setAttribute('src', 'imagens/mulher-i.png')
        }
    }
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}