
let convidados = ""

class GerenciadorLista{

  adicionar(){

  let batma = document.getElementById('entrada')
  let robin = document.getElementById("textoMensagem")
  

  if (batma.value == ""){

    alert ("Preencha o campo nome!")

  }
else{
 convidados  = convidados + "\n" + batma.value
 //textoMensagem.innerText = convidados
 robin.innerText = convidados;
}
batma.value = ""


}

}










 
adicionaar(){

  let batma = document.getElementById('inputConvidado')
  let robin = document.getElementById('lista')
  
  
  
  





let contador= 0;
let gerenciador = new GerenciadorLista()