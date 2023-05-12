window.onload = () => {

  const btnCifrar = document.getElementById("btnCifrar");
  const btnDecifrar = document.getElementById("btnDecifrar");
  
  
  
  btnCifrar.addEventListener('click', () => {
    const texto = document.getElementById("mensaje1").value.toUpperCase();
    const llave = document.getElementById("numb").value;
    const encodedTexto = window.cipher.encode(texto, llave);
    document.getElementById("mensaje2").value = encodedTexto;
  });
  

  btnDecifrar.addEventListener('click', () => {
    const texto = document.getElementById("mensaje1").value.toUpperCase();
    const llave = document.getElementById("numb").value;
    const decodedTexto = window.cipher.decode(texto, llave);
    document.getElementById("mensaje2").value = decodedTexto;
  
  });
  
}