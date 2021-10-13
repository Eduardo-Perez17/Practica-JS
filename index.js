// Escriba un algoritmo para cobrar un cheque genérico en un banco

let money = prompt('cuanto dinero tiene?')
document.write(money)

const remove = document.getElementById('remove')
const add = document.getElementById('add')

remove.addEventListener('click', ()=>{
  let removeMoney = prompt('cuanto desea retirar');
  document.write(`${removeMoney - money}. Espere por favor 5 segundos`);

  let timerRemoveMoney = ()=> {
    javascript.history.go(-1)
  }
    setTimeout(timerRemoveMoney, 5000) 
  })