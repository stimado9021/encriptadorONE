const encri = document.querySelector('#encri')


encri.addEventListener('click',()=>{
var et = document.getElementById('entradaTexto')
var st = document.querySelector('#salidaTexto')
const t = et.value;
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
console.log(cifrado)
st.innerText=cifrado

})


