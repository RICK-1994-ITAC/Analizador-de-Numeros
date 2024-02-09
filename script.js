
var num = document.getElementById('cnumero')
var list= document.getElementById('numeros')
var res = document.querySelector('div#resposta')
var r = Number(res.value)
var valores = []

function adc(){  
if(num.value.length==0 || num.value <=0 || num.value > 100 || valores.indexOf(Number(num.value)) != -1){
    alert('[ERRO], campo vazio ou número invalido.')
    
}
else {
    var result = document.createElement('option')
    result.text = `Valor ${num.value} adicionado`
    list.appendChild(result)
    valores.push (Number(num.value))
        
}

res.innerHTML=''
num.value = ''
num.focus()
}

function finalizar(){
    if (valores.length ==0){
      alert('Adicione valores antes de finalizar')  
    }else {
        var tot = valores.length
        res.innerHTML =''
        var maior = valores[0]
        var menor = valores[0]
            for(var pos in valores ){
                if(maior < valores[pos]) {
                    maior = valores[pos]
                }
                if(menor > valores[pos]) {
                    menor = valores[pos]
                }   
            }
            var soma = 0
            for(let pos in valores){
                soma = soma + valores[pos]
            }
            var media = soma/ valores.length
       }
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}<p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos: ${soma}`
        res.innerHTML += `<p> A média de todos os valores é : ${media}`
    }


