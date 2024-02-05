const btnEncri = document.querySelector('.btn-encriptar')

// const removeAccents = (str) => {
//   return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// } 

window.addEventListener('load',()=>{
  
    // const audio = new Audio("js/mensajeBienvenida.mp3");
    // audio.play();
 
})
   
document.getElementById('texto').addEventListener('keyup',(e)=>{
  var regex = new RegExp("^[a-z ]+$");
  var key = e.target.value;
  if (!regex.test(key)) {
    //e.preventDefault();
   const alerta =document.querySelector(".alerta")
   alerta.style.display='block'  
   const audio = new Audio("js/mensaje.mp3");
   audio.play();
   setTimeout(()=>{
      alerta.style.display='none'       
   },8000)
    

    //return false;
  }
  console.log(e.target.value)

})

btnEncri.addEventListener('click',()=>{
    var et = document.getElementById('texto')
    var st = document.querySelector('#salidaTexto')
    var t = et.value;
    console.log(/^([0-9])*$/.test(et.value))
    t = t.toLowerCase();

                  var cifrado='';
                  for(var l=0;l<t.length;l++){

                  switch (t[l]) {
                          case "a":
                              cifrado+='ai'
                            break;
                          case "e":
                              cifrado+='enter'
                            break;
                          case "i":
                              cifrado+='imes'
                            break;
                          case "o":
                              cifrado+='ober'
                            break;
                          case "u":
                              cifrado+='ufat'
                            break;
                            default:
                              cifrado+=t[l];
                      }   
                  }
      et.value=''
      et.value = cifrado ;
      document.getElementById('muneco').setAttribute('src','imagen/pulgar.png')           
      document.getElementById('mensajeDeExito').innerText='El Encriptado se ha Realizado con  Exito !Felicidades¡'
      document.getElementById('alerta2').innerText=''
      const audio = new Audio("js/mensajeExito.mp3");
      audio.play();
})


