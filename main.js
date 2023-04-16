const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDescrypt = document.getElementById("buttonDecrypt");
const buttonCopy = document.getElementById("buttonCopy");


buttonEncrypt.addEventListener('click', () => {
    let text = document.getElementById('text');
    if(text.value){
      let encryptText = encriptarTexto(text.value.toLowerCase());
      document.getElementById('result').value = encryptText;

      buttonCopy.disabled = false;
      document.getElementById('result').style.display = "block";
      document.getElementById('muñeco1').style.display = "none";
      document.getElementById('mensaje').style.display = "none";
      document.getElementById('parrafo').style.display = "none";
      buttonCopy.style.display = "block";
    } else {

      document.getElementById('muñeco1').style.display = "none";
      document.getElementById('lupa1').style.display = "block";
      console.log("Mensaje no encontrado");
    }

})

buttonDescrypt.addEventListener('click', () => {
    let text = document.getElementById('text');
    if(text.value){
      let descryptText = desencriptarTexto(text.value.toLowerCase());
      document.getElementById('result').value = descryptText;
    }else{
      document.getElementById('muñeco1').style.display = "none";
      document.getElementById('lupa1').style.display = "block";
      console.log("Mensaje no encontrado");
    }

})

buttonCopy.addEventListener('click', () => {
    const result = document.getElementById('result');
    const textArea = document.createElement("textarea");
    textArea.value = result.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  });

    const encriptarTexto = (texto) => {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
  }

  const desencriptarTexto = (texto) => {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
  }