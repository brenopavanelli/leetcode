var romanToInt = function(s) {
    simbolos = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let soma = 0;
    
    for (let i = 0; i < s.length; i++) {
        let digitoAtual = simbolos[s[i]];
        let digitoFuturo = simbolos[s[i+1]];

        if (digitoAtual < digitoFuturo) {
            // IV = 4 
            soma += digitoFuturo - digitoAtual;
            i++;
        } else {
            // XI = 11
            soma += digitoAtual;
        }
    };

    return soma;
};

console.log(romanToInt("XIV"));