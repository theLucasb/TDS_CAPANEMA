//               0  1  2  3  4  5
const valores = [1, 2, 3, 4, 5, 8];

valores[0] = 100;
valores.push(200);
console.log(valores);

console.log(valores.indexOf(8)); // Retorna o índice do valor
console.log(valores.includes(10)); // Verifica se existe ou não
console.log(valores.includes(200));
console.log(valores.join(' / ')); // Utilizado para separar valores

const numeros = [10, 20, 30];
console.log(valores.concat(numeros));

