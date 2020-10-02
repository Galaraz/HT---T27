
 //document.addEventListener('keypress', function(e)){
 //   if (e.which == 13) {
  //     salvar();
  //  }
//}else{} ;

class GeradorAluno {

constructor(){

this.qtdAprovado  =0;
this.qtdReprovado =0;


}

    verificarSituacao() {
        let n1 = parseFloat(document.getElementById("N1"));
        let n2 = parseFloat(document.getElementById("N2"));
        let n3 = parseFloat(document.getElementById("N3"));
        let lista = document.getElementById("lista");

        let soma = n1+n2+n3;
        let media = soma/3;

       if (media >=7){

        alert ("passou");
        this.qtdAprovado = this.qtdAprovado+1;


       }

       else if (media >= 4 && media < 7  ){

        alert ("nao passou");
        this.qtdReprovado = this.qtdReprovado+1;

        //resultado.innerHtml = "<span> Qtd Aprovados: "+this.qtdReprovado+"</spam>"
        
       let divResultado = document.getElementById("qtdAprovado");
       let span = document.getElementById("span");

       span.innerText =this.qtdAprovado;
       divResultado.appendChild("span");
    
    }

    else {

        alert("Reprovado")
    }

  
}
    
}



var notaAluno = new GeradorAluno(); 




