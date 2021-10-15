let money = parseInt(prompt('cuanto dinero tienes'));

const remove = document.getElementById('remove')
const add = document.getElementById('add')
alert(`tienes en la cuenta ${money}`)

remove.addEventListener('click', ()=>{
  let passwordRemove = ()=> {
    let passRemove = prompt('introduzca la clave')
    if(passRemove == 'mundo') {

      let removeMoney = parseInt(prompt('Cuanto desea retirar'));
      if(money >= removeMoney) {
        money -= removeMoney 
        alert(`Le quedan ${money}`);
      } else {
        alert('no tienes plata suficiente jaja mmgvo pobre')
      }
    } else if (passRemove !== 'mundo') {
      alert('la clave es incorrecta')
      passwordRemove();
    }
  }
  passwordRemove()
})

add.addEventListener('click', ()=>{
  let passwordAdd = ()=> {
    let passAdd = prompt('introduzca la clave') 
    if(passAdd == 'mundo') {

      let addMoney = parseInt(prompt('Cuanto desea añadir'));
      if(addMoney > 3000) {
        alert(`Usted no puede sacar mas 2999, no puede sacar ${addMoney}`);
      } else if (addMoney < 100){
        alert('no puedes sacar menos de 100')
      } else {
        alert('Gracias por usar el banco para meter plata')
        money -= removeMoney 
      }
    } else if (passwordAdd !== 'mundo') {
      alert('la clave es incorrecta')
      passwordAdd();
    }
  }
  passwordAdd()
})


