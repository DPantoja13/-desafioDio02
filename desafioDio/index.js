// fuction to victory and defeat
let result = quantity(x = 0, y = 0);

function quantity(victory = x, defeat = y) {
    let cal = victory - defeat;
    return cal;
}

// function to the patents
let p = patent(result)

function patent (result){
    if (result <= 10){
        return "Ferro";
    }else if(result >=11 && result <=20){
        return "Bronze";
    }else if(result >=21 && result <=50){
        return "Prata";
    }else if(result >=51 && result <=80){
        return "Ouro";
    }else if(result >=81 && result <=90){
        return "Diamante";
    }else if(result >=91 && result <=100){
        return "Lendário";
    }else if(result >= 101){
        return "Imotal";
    }
}

console.log("O herói tem de saldo de " + result + " Vitorias" + " e está no nível " + p)
