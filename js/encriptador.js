const btnEncri = document.querySelector('.btn-encriptar')
const btnDesencri = document.querySelector('.btn-desencriptar')

// const removeAccents = (str) => {
//   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// } 

document.querySelector('#copiar').addEventListener('click',()=>{
  var contenido = document.querySelector('#mensaResp').textContent
 navigator.clipboard.writeText(contenido)
 document.querySelector('#mensaResp').textContent='';
  
})

window.addEventListener('load',()=>{
  
    const audio = new Audio("js/mensajeBienvenida.mp3");
    audio.play();
 
})
   
document.getElementById('texto').addEventListener('keyup',(e)=>{
  var regex = new RegExp("^[a-z ]+$");
  var key = e.target.value;
  if (!regex.test(key)) {  
   const alerta =document.querySelector(".alerta")
   alerta.style.display='block'  
   const audio = new Audio("js/mensaje.mp3");
   audio.play();
   setTimeout(()=>{
      alerta.style.display='none'       
   },8000)
  }
})

function desencriptar(frase){
  i=0;
 
 let cifrado=frase
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");  
      
      document.querySelector('#mensaResp').innerText=cifrado;
}


btnDesencri.addEventListener('click',()=>{
  const textoOriginal = JSON.parse(localStorage.getItem('frase'))
  
  var t = document.getElementById('texto').value  
  
  var palabra =desencriptar(t)
  // document.getElementById('muneco').setAttribute('src','imagen/muneco.png')            
 
  // localStorage.removeItem('frase')
  const audio = new Audio("js/exitodesen.mp3");
  audio.play();
})

btnEncri.addEventListener('click',()=>{
    var et = document.getElementById('texto')
    var st = document.querySelector('#salidaTexto')
    var t = et.value;   
    t = t.toLowerCase();      
                  let cifrado=t
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
          console.log(cifrado);
                
      
     document.getElementById('mensaResp').innerText = cifrado ;
     et.value=''
     et.setAttribute('placeholder','Ingrese el texto aqui')     
      // document.getElementById('muneco').setAttribute('src','imagen/pulgar.png')           
    
      const audio = new Audio("js/mensajeExito.mp3");
      audio.play();
      
})


