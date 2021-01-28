function envio(){
    var nome = $("#nome").val(); 
    //document.getElementById('nome').value;
    var cidade = $("#cidade").val();
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/usuarios",
        data: {
            "id": 3,
            "nome": nome,
            "cidade": cidade
        },
        success: function(){
            alert('Dados salvos com sucesso!');
        },
        error: function(){
            alert('Ocorreu um erro inesperado!');          
        }
    });
}