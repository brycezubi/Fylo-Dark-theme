const formulario = document.querySelector('#formulario');
console.log(formulario);

formulario.addEventListener('submit' , e=>{
  e.preventDefault();

  const email = formulario['email'].value;
  // console.log(email)

  if(email === ''){
    addError('email','campo obligatorio')
  }else if(!isValid(email)){
    addError('email','email no Valido')
  }else{
    removeError();
  }
})


function addError(campo , mensaje){
  const small = document.querySelector('.error');
  // console.log(small)
  small.innerText =  mensaje;
  small.style.color =  'red';
}

function removeError(){ 
  const small = document.querySelector('.error');
  small.style.display = 'none';
  
}
function isValid(email){
  var re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}