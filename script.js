console.log('Javascript carregado'); //Deixei esse aviso para perceber todas os reloads

function validaCPF(cpf) {
    //deve ter 11 números
    if(cpf.length != 11) {
        return false;
    } else {
        
        var numeros = cpf.substring(0, 9); 
        //a partir do 0 eu pego até a posição 9
        var digitos = cpf.substring(9);
        //vou pegar tudo que estiver do 9 pra frente 
        
        //eu preciso percorrer esse texto de trás para frente 
        //antes de começar eu preciso criar uma variável de incremento
        
        var soma = 0;
        for(var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
            //charAt() é uma função que visita as posições até achar e retornar o que eu quero a partir de um idx
        }

        console.log(soma);
        
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); //tipo uma condicional 
        
        //VALIDAÇÃO DO PRIMEIRO DÍGITO
        if(resultado != digitos.charAt(0)) {
            return false;
        }
        
        soma = 0;
        numeros = cpf.substring(0, 10);
        
        for(var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }
        console.log(soma);
        
        resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);
        
        //VALIDAÇÃO DO SEGUNDO DÍGITO
       /* if(resultado != digitos.charAt(1)) {
            console.log('entrou aqui');
            return false;
        } */
        //37142811854

        return true;
    }
}

function validacao() {
    console.log('Iniciando validação');
    //o cpf digitado vai ser capturado através do javascript dentro html e vai ser armazenado nessa variável
    
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    var cpf = document.getElementById('cpf_digitado').value;
    //exibindo esse valor:
    //mas antes vá no html idetificar onde esse valor é dado
    //console.log(cpf);

    var resultadoValidacao = validaCPF(cpf); 

    if(resultadoValidacao) {
        //vá ao html e veja onde tem algo relacionado a isso (quadro de sucesso)
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}