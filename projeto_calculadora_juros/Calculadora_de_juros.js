var capital, mes, mesada, juros, totalMesada;

do {
    capital = Number(prompt("Quanto há de capital? \n"));
    if (isNaN(capital)) {
        console.log("Valor Inválido!");
    }
} while (isNaN(capital));
do {
    juros = Number(prompt("Quanto é a % em juros anual? \n"));
    if (isNaN(juros)) {
        console.log("Valor Inválido!");
    }
} while (isNaN(juros));
do {
    mes= Number(prompt("Por quanto meses pouparás? \n"));
    if (isNaN(mes)) {
        console.log("Valor Inválido!");
    }
} while (isNaN(mes));
do {
    mesada = Number(prompt("Quanto é a quantia em R$ poupada? \n"));
    if (isNaN(mesada)) {
        console.log("Valor Inválido!");
    }
} while (isNaN(mesada));

totalMesada = mesada * mes + capital;

for (let i=0;i<mes;i++) {
    capital = (capital + mesada) * (1 + (juros/100)/12);
}

console.log("O total é R$" + parseFloat(capital).toFixed(2) + "!");
console.log("O total poupado é R$" + parseFloat(totalMesada).toFixed(2) + "!");
console.log("O total em juros é R$" + parseFloat(capital - totalMesada).toFixed(2) + "!");