import cipher from './cipher.js';

window.onload = function() {
  document.getElementById("mensaje1").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });
 
  const btnCifrar = document.getElementById("btnCifrar");
  const btnDecifrar = document.getElementById("btnDecifrar");

    
  btnCifrar.addEventListener('click', () => {
    const texto = document.getElementById("mensaje1").value.toUpperCase();
    const offset = document.getElementById("numb").value;
    const encodeTexto = cipher.encode(offset, texto);
    document.getElementById("mensaje2").value = encodeTexto;

  });
  

  btnDecifrar.addEventListener('click', function () {
    const texto = document.getElementById("mensaje1").value.toUpperCase();
    const offset = document.getElementById("numb").value;
    const decodeTexto = cipher.decode(offset,texto);
    document.getElementById("mensaje2").value = decodeTexto;
   


  });

  
};
console.log(cipher);

