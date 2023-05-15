const cipher ={

  encode: (texto,offset) => {
    let resultado="";
    for (let i = 0; i < texto.length; i++) {
      // código ASCII
      const letras = (texto.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      //Concatenando letras codificadas
      resultado += String.fromCharCode(letras);
   
      
      
    } 
    return resultado;
  },
  decode: (texto, offset) => {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {

      //alfabeto  ASCII
      const letras = (texto.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
      //Concatenando las letras decodificadas
      resultado += String.fromCharCode(letras);
      
    }
    return resultado;

  },

    
}
export default cipher;