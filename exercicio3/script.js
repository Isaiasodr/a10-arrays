const filmes = ["Constantine", "De Volta ao jogo", "John Wick 2"];
const Data_lancamento = [2005, 2014, 2017];
const array = [23, "agosto", 1989, true];

const filmesCopia = ["Constantine", "De Volta ao jogo", "John Wick 2"];
const dataLancamentoCopia = [2005, 2014, 2017];
const arrayCopia = [23, "agosto", 1989, true];

filmesCopia.push(280);
dataLancamentoCopia.pop();

console.log(filmes);
console.log(filmesCopia);

console.log(Data_lancamento);
console.log(dataLancamentoCopia);

/* removendo segundo item do terceiro array */
arrayCopia.splice(1, 1);
console.log(array);
console.log(arrayCopia);
