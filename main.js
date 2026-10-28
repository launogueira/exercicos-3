

function hoppy (){
    alert ("Bem vindos ao parque Hoppy Happy");

    alert ("Para brincar verifique os critérios obrigatórios!");


    let alturaPassageiro= Number(prompt("Digite sua altura (apenas em números)"));

    if (alturaPassageiro >= 1.5){
       alert ("Poderá entrar no brinquedo, se divirta!");
    }

    else {
        alert ("Entrada proibida, sinto muito!");
    }
    
}

function produtos (){
    alert ("Olá, iniciando verificaçãode estoque");

    let quantidadeProduto = Number(prompt("Digite a quantidade do produto (apenas em números)"));

    if (quantidadeProduto <= 5){
        alert ("Estoque está baixo!")
    }

    else {
        alert ("OK!")
    }
}

