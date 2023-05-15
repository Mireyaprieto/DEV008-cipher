import cipher from './cipher.js';
window.onload = function() {


  const btnCifrar = document.getElementById("btnCifrar");
  const btnDecifrar = document.getElementById("btnDecifrar");
    
  btnCifrar.addEventListener('click', () => {
    const texto = document.getElementById("mensaje1").value.toUpperCase();
    const offset = document.getElementById("numb").value;
    const encodeTexto = cipher.encode(texto, offset);
    document.getElementById("mensaje2").value = encodeTexto;
  });
  

  btnDecifrar.addEventListener('click', function () {
    const texto = document.getElementById("mensaje2").value.toUpperCase();
    const offset = document.getElementById("numb").value;
    const decodeTexto = cipher.decode(texto,offset);
    document.getElementById("mensaje1").value = decodeTexto;

  });
  
  
};
console.log(cipher);

