
console.log('***************** Exercício 1 ********************');
let somarArguments = [];
function somar(n1, n2, n3, n4) {
  for (const argument of arguments) {
    somarArguments.push(argument);
  }
  return n1 + n2 + n3 + n4;
}

const media = (media) => media / 4;

const sumAndAverage = () => {
    const total = somar(23, 34, 56, 21)
    const _media =  media(total);
     
  console.log("Números: ", ...somarArguments);
  console.log(`A soma dos números é: ${total}`);
  console.log(`A média dos números é: ${_media}`);
};
sumAndAverage();


console.log('***************** Celsius to Farenheit ********************');
function convertToFarenheit(temp){
  return temp * 1.8 + 32
}
console.log('***************** Celsius to Farenheit ********************');
console.log(convertToFarenheit(38));
console.log('***************** Celsius to Farenheit ********************');

const celsiusToFarenheit = (celsius) => (celsius * 1.8) + 32;
console.log(celsiusToFarenheit(34));

console.log('***************** Aluno média ********************');
const studantScore = (score) =>{
  if (score < 7) {
    alert('Recuperação');
  } else if(score === 7) {
    alert ('Na média')
  } else if(score > 7.1 && score < 9.4){
    alert('Teve um bom aproveitamento')
  }else if(score > 9.5){
    alert('Aceita ser monitor')
  }
}
studantScore(7)
console.log('************** Imprimir ímpares de 100 a 200 *****************');

const printAllOddFrom100To200 = ()=>{
    for (let index = 100; index < 200; index++) {  
        if (index % 2) {
            console.log(index)
        }
    }
}

printAllOddFrom100To200();


console.log('***************** Dia da Semana ********************');
const weekDay = new Date()
const today = weekDay.getDay()
console.log(today);

const weekDayToday = (weekDay) => {
   switch (weekDay) {
    case 1: console.log('Today is Monday');
      
      break;
    case 2: console.log('Today is Tusday');
      
      break;
    case 3: console.log('Today is Wednesday');
      
      break;
    case 4: console.log('Today is Thurday');;
      
      break;
    case 5: console.log('Today is Fryday');;
      
      break;
    case 5: console.log('Today is Sunday');;
      
      break;
   
    default:
      break;
   }
}
weekDayToday(today)

console.log('***************** Tabuada ********************');

const tabuada = (n)=>{
  let showresult = `A tabuada de ${n} e: `
  console.log(showresult);
  for (let index = 0; index <= 10; index++) {
    console.log(`${index} x ${n} = ${index * n}`); 
  }
}
tabuada(6)

console.log('***************** List of Tecnologies ********************');

const listOfTecnologies = ['HTML', 'CSS', 'Js', 'MongoDB', 'Express', 'React', 'NodeJs']

console.log(listOfTecnologies); 
// insert of at the end of array
listOfTecnologies.push('Postgres')
console.log(listOfTecnologies);
//add at the begining of array
listOfTecnologies.unshift("Conceitos de Web", "Conceitos de Redes")
console.log(listOfTecnologies);
// remove last element
listOfTecnologies.pop()
console.log(listOfTecnologies);
// remove first element
listOfTecnologies.shift();

console.log( ...listOfTecnologies); 


console.log('***************** Print a List ********************');

const list = ['HTML', 'CSS', 'JS', 'MongoDB', 'Express', 'React', 'NodeJS']

console.log(`Lista original: `, ...list)
const removeElement = 'JS'
console.log(`O ítem removido ${removeElement} estava na posição ${list.indexOf(removeElement)}`);
const newArray = list.filter(item => item != removeElement )
console.log(newArray);



