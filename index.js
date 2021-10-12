const btn = document.getElementById('btn')
const cheque = document.getElementById('cheque')
const firma = document.getElementById('firma')

let retirar = ()=>{
  btn.addEventListener('click', ()=> {
    cheque.classList.replace("main__cheques","checkOut")
    console.log('hola mundo')
  })
}

btn.addEventListener('click', e=>{
  e.preventDefault()
  if(firma.value.length < 2) {
    alert('necesita una firma de mas de dos caracteres para continuar')
  } else {
    retirar()
  }
})
