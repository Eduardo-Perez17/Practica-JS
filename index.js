// Escriba un algoritmo para cobrar un cheque genérico en un banco
// VALIDAR QUE SE EL USUARIO CON UNA CONTRASE:A

let money = parseInt(prompt('cuanto dinero tienes'));

const remove = document.getElementById('remove')
const add = document.getElementById('add')
alert(`tienes en la cuenta ${money}`)

remove.addEventListener('click', ()=>{
  let removeMoney = parseInt(prompt('Cuanto desea retirar'));
  if(money >= removeMoney) {
    alert(`Le quedan ${money - removeMoney}`);
        console.log(removeMoney)
  } else {
    alert('no tienes plata suficiente jaja mmgvo pobre')
  }
})

add.addEventListener('click', ()=>{
  let addMoney = parseInt(prompt('Cuanto desea añadir'));
  if(addMoney > 3000) {
    alert(`Usted no puede sacar mas 2999, no puede sacar ${addMoney}`);
  } else if (addMoney < 100){
    alert('no puedes sacar menos de 100')
  } else {
    alert('Gracias por usar el banco para meter plata')
    money + addMoney
  }
})

// condicional
// let calc = (resOne, resTwo) => {
//   return resOne - resTwo
// }
// calc(money, removeMoney)
// console.log(calc)