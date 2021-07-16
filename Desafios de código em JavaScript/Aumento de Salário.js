const input = gets();

const salary = Number(lines.shift());

let percent;

if (salary <= 400) {
  percent = 15;
} else if (salary >= 400.1 && salary <= 800) {
  percent = 12;
} else if (salary >= 800.1 && salary <= 1200) {
  percent = 10;
} else if (salary >= 1200.1 && salary <= 2000) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = salary / (100/percent);
const newSalary = salary + reajust;
console.log("Novo salario: " + newSalary.toFixed(2));
console.log("Reajuste ganho: " + reajust.toFixed(2));
console.log("Em percentual: " + percent + " %");