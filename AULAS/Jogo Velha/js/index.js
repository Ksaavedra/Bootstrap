letra = "X";

function joga(quadros){
    quadroclicada = document.getElementById(quadros).innerHTML;
   if (quadroclicada == "X" || quadroclicada == "O"){
       alert("Opa, este quadrado já foi escolhido!");
   }else{
        document.getElementById(quadros).innerHTML = letra;
        if (letra == "X"){
            letra = "O";
        }else{
            letra = "X";
        }
   }
}

function verif(){
   qd1 = document.getElementById('quadro1').innerHTML;
   qd2 = document.getElementById('quadro2').innerHTML;
   qd3 = document.getElementById('quadro3').innerHTML;
   qd4 = document.getElementById('quadro4').innerHTML;
   qd5 = document.getElementById('quadro5').innerHTML;
   qd6 = document.getElementById('quadro6').innerHTML;
   qd7 = document.getElementById('quadro7').innerHTML;
   qd8 = document.getElementById('quadro8').innerHTML;
   qd9 = document.getElementById('quadro9').innerHTML;
   
   if (((qd1 != '') && (qd2 != '') && (qd3 != '') && (qd1 == qd2) && (qd2 == qd3)) 
   || ((qd1 != '') && (qd5 != '') && (qd9 != '') && (qd1 == qd5) && (qd5 == qd9)) 
   || ((qd1 != '') && (qd4 != '') && (qd7 != '') && (qd1 == qd4) && (qd4 == qd7)) 
   || ((qd4 != '') && (qd5 != '') && (qd6 != '') && (qd4 == qd5) && (qd5 == qd6)) 
   || ((qd7 != '') && (qd8 != '') && (qd9 != '') && (qd7 == qd8) && (qd8 == qd9)) 
   || ((qd2 != '') && (qd5 != '') && (qd8 != '') && (qd2 == qd5) && (qd5 == qd8)) 
   || ((qd3 != '') && (qd6 != '') && (qd9 != '') && (qd3 == qd6) && (qd6 == qd9)) 
   || ((qd7 != '') && (qd5 != '') && (qd3 != '') && (qd7 == qd5) && (qd5 == qd3))){
    alert('Você ganhou! Parabéns campeão!');
    reiniciar();
   }
}

function reiniciar(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
          nomequadro = 'quadro' + i + j
           document.getElementById(nomequadro).innerHTML = '';
      
      }
   }
}