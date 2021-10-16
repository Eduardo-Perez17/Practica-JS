(() => {
  let money = parseInt(prompt('cuanto dinero tienes'));
  
  const remove = document.getElementById('remove')
  const add = document.getElementById('add')
  alert(`tienes en la cuenta ${money}`)
  
  const getPassword = () => {
    let passAdd = prompt('introduzca la clave')
    const checkPass = 'mundo';
    checkPass === passAdd ? true : getPassword();
  }  
  
  const calcula = (moneyF, messagePrompt, action) => {
    const getMon = parseFloat(prompt(messagePrompt));
  
    if(action === 'sumar'){
      return moneyF + getMon;
    }else if(action === 'restar') {
      if(moneyF >= getMon){
        return moneyF - getMon;
      }else{
        console.log('No tienes dinero');
        return moneyF;
      }
    }else{
      console.log('esta accion no existe');
    }
  }
  
  remove.addEventListener('click', ()=>{
    if(getPassword()){
      money = calcula(money, 'Cuanto desea retirar', 'restar');
      console.log(money);
    }
  })
  
  add.addEventListener('click', ()=>{
    if(getPassword()){
      money = calcula(money, 'Cuanto desea agregar', 'sumar');
      console.log(money);
    }
  })          

})();













/*

remove.addEventListener('click', ()=>{
  // let passwordRemove = ()=> {
  //   let passRemove = prompt('introduzca la clave')
  //   if(passRem ove== 'mundo') {

  //     let removeMoney = parseInt(prompt('Cuanto desea retirar'));
  //     if(money >= removeMoney) {
  //       money -= removeMoney 
  //       alert(`Le quedan ${money}`);
  //     } else {
  //       alert('no tienes plata suficiente jaja mmgvo pobre')
  //     }
  //   } else if (passRemove !== 'mundo') {
  //     alert('la clave es incorrecta')
  //     passwordRemove();
  //   }
  // }
  // passwordRemove()

  if(getPassword()){
    money = calcula(money, 'Cuanto desea retirar', 'restar');
    console.log(money);
  }
})

add.addEventListener('click', ()=>{
  // let passwordAdd = ()=> {
  //   let passAdd = prompt('introduzca la clave')
  //   if(passAdd == 'mundo') {

  //     let addMoney = parseInt(prompt('Cuanto desea añadir'));
  //     if(addMoney > 3000) {
  //       alert(`Usted no puede sacar mas 2999, no puede sacar ${addMoney}`);
  //     } else if (addMoney < 100){
  //       alert('no puedes sacar menos de 100')
  //     } else {
  //       alert('Gracias por usar el banco para meter plata')
  //       money -= removeMoney 
  //     }
  //   } else if (passwordAdd !== 'mundo') {
  //     alert('la clave es incorrecta')
  //     passwordAdd();
  //   }
  // }
  // passwordAdd()

  if(getPassword()){
    money = calcula(money, 'Cuanto desea agregar', 'sumar');
    console.log(money);
  }
})                               

*/