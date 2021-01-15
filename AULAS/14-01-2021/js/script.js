
/*CTRL+SHIFT+U
function somar(numero1, numero2){

    var resultado = numero1 + numero2;

    console.log("O resultado da soma é: "+resultado);

}

function boasVindas(){
    alert("Seja bem-vindo, você pressionou o botão cinza");
}

function boasVindasLog(){
    console.log('O elemento ganhou o foco');
}

function boasVindas(){
    alert("Seja bem-vindo, você pressionou o botão cinza");
}
*/
function limparParcial(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operacao').value = "";
}

function limpar(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operacao').value = "";
    document.getElementById('resultado').value = "";
}

function calcular(){
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;
    var operacao = document.getElementById('operacao').value;
    var resultado;
    
    if(numero1 == ''){
        alert('Favor digitar um número válido para operação (num1)');
        return false;
    }
    
    if(numero2 == ''){
        alert('Favor digitar um número válido para operação (num2)');
        return false;
    }
    //numero1 = parseFloat(numero1);
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    //numero2 = parseFloat(numero2);

    switch(operacao){
        case 'sub': resultado = numero1 - numero2;
                    break;
        case 'adi': resultado = numero1 + numero2;
                    break;
        case 'mult': resultado = numero1 * numero2;
                    break;
        case 'div': resultado = numero1 / numero2;
                    break;
        default: alert("Escolha uma operação válida!");
                 return false;
    }
    limparParcial();
    document.getElementById('resultado').value = resultado;
    
}















/*

    var operacao = document.getElementById('operacao').value;
        
    //alert(operacao);
    var num1 = document.getElementById('num1').value;
    
    var num2 = document.getElementById('num2').value;
    
    if(num1 == '' || num1 == null){
        alert('Favor digitar um número válido para operação (num1)');
        return false;
    }
    
    if(num2 == '' || num2 == null){
        alert('Favor digitar um número válido para operação (num2)');
        return false;
    }
    
    var resultado = null;

    //forçando o tipo de variável
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch(operacao){
    
        case '1': //subtracao
            resultado = num1 - num2;
            break;
        
        case '2': //adição
            resultado = num1 + num2;
            break;
        
        case '3': //multiplicação
            resultado = num1 * num2;
            break;
        
        case '4': //divisão
            resultado = num1 / num2;
            break;
        
        default:
            alert('A opção selecionada é inválida');
            return false;
    }
    
    document.getElementById('resultado').value = resultado;
    
}
*/