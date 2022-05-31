function somar(){
    let capturando = 0
    capturando1 = document.querySelector('#n1').value
    capturando2 = document.querySelector('#n2').value

    //realiza o calculo
    res = parseInt(capturando1) + parseInt(capturando2)

    //tras resultado da conta
    document.querySelector('#result').innerHTML = res

    //verifica se o resultado eh impar ou par
    if((res%2) == 0){
        document.querySelector('#par-impar').innerHTML = "O resultado final eh par"
    }else{
        document.querySelector('#par-impar').innerHTML = "O resultado final eh impar"
    } 

    //verifica se o resultado eh um numero primo
    let divisores = 0
    for(let count=1 ; count<=res ; count++){
        if(res % count == 0){
            divisores++;
        
        if(divisores==2){
            document.querySelector('#primo').innerHTML = "O resultado final eh primo"
        }else{
            document.querySelector('#primo').innerHTML = "O resultado final nao eh primo"
        }
        }
    }
}
function subtrair(){
    let capturando = 0
    capturando1 = document.querySelector('#n1').value
    capturando2 = document.querySelector('#n2').value

    res = parseInt(capturando1) - parseInt(capturando2)

    document.querySelector('#result').innerHTML = res
    if((res%2) == 0){
        document.querySelector('#par-impar').innerHTML = "O resultado final eh par"
    }else{
        document.querySelector('#par-impar').innerHTML = "O resultado final eh impar"
    } 

    let divisores = 0
    for(let count=1 ; count<=res ; count++){
        if(res % count == 0){
            divisores++;
        
        if(divisores==2){
            document.querySelector('#primo').innerHTML = "O resultado final eh primo"
        }else{
            document.querySelector('#primo').innerHTML = "O resultado final nao eh primo"
        }
        }
    }
}
function dividir(){
    let capturando = 0
    capturando1 = document.querySelector('#n1').value
    capturando2 = document.querySelector('#n2').value

    res = (parseInt(capturando1) / parseInt(capturando2)).toFixed(0)

    
    document.querySelector('#result').innerHTML = res
    if((res%2) == 0){
        document.querySelector('#par-impar').innerHTML = "O resultado final eh par"
    }else{
        document.querySelector('#par-impar').innerHTML = "O resultado final eh impar"
    } 

    let divisores = 0
    for(let count=1 ; count<=res ; count++){
        if(res % count == 0){
            divisores++;
        
        if(divisores==2){
            document.querySelector('#primo').innerHTML = "O resultado final eh primo"
        }else{
            document.querySelector('#primo').innerHTML = "O resultado final nao eh primo"
        }
        }
    }
}
function multiplicar(){
    let capturando = 0
    capturando1 = document.querySelector('#n1').value
    capturando2 = document.querySelector('#n2').value

    res = parseInt(capturando1) * parseInt(capturando2)

    document.querySelector('#result').innerHTML = res
    if((res%2) == 0){
        document.querySelector('#par-impar').innerHTML = "O resultado final eh par"
    }else{
        document.querySelector('#par-impar').innerHTML = "O resultado final eh impar"
    } 

    let divisores = 0
    for(let count=1 ; count<=res ; count++){
        if(res % count == 0){
            divisores++;
        
        if(divisores==2){
            document.querySelector('#primo').innerHTML = "O resultado final eh primo"
        }else{
            document.querySelector('#primo').innerHTML = "O resultado final nao eh primo"
        }
        }
    }
}
function limpar(){

    document.querySelector('#result').innerHTML = '0'
    document.querySelector('#n1').value = ''
    document.querySelector('#n2').value = ''
    document.querySelector('#par-impar').innerHTML = '-'
    document.querySelector('#primo').innerHTML = '-'
}