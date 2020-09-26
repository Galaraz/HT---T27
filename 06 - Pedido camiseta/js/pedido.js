
 //document.addEventListener('keypress', function(e)){
 //   if (e.which == 13) {
  //     salvar();
  //  }
//}else{} ;



    let tamanhoP = document.getElementById("tamanhoP");
    let tamanhoM = document.getElementById("tamanhoM");
    let tamanhoG = document.getElementById("tamanhoG");
    let contador = 0;
    let idEdicao = null;
    let resultado=0;

    let lista = document.getElementById("lista");
   

    function salvar() {
      

        if (tamanhoP.value == "") {

            alert("Preencha o campo nome!");

        } else {


            if (idEdicao == null) {
                //Entrou na Inserção de um elemento novo

                //Criando os elementos para o novo item da lista
                let divNova = document.createElement("div");
                let span = document.createElement("span");
                let imgRemover = document.createElement("img");
                let imgEditar = document.createElement("img");

                //Adicionando o id da div com contador e incrementando
                divNova.id = "item-" + contador;
                span.id = "span-" + contador;
                contador++;

                //Setando os valores dos elementos
                span.innerText = resultado.value;
               
                imgRemover.src = "img/delete.svg";
                imgEditar.src = "img/editar.svg";

                 // imgRemover.setAttribute('onclick', "gerenciador.remover('" + divNova.id + "')")
                imgRemover.setAttribute(
                    "onclick",
                    `gerenciador.remover('${divNova.id}')`
                );

                imgEditar.setAttribute(
                    "onclick",
                    `gerenciador.editar('${span.id}')`
                );
                //gerenciador.remover('item-0')

                divNova.appendChild(span);
                divNova.appendChild(imgRemover);
                divNova.appendChild(imgEditar);
                lista.appendChild(divNova);








            } else {
                document.getElementById(idEdicao).innerText = P.value
                idEdicao = null
            }

            input.value = "";
        };
    };

   function remover(id) {

        if (confirm("Tem certeza que deseja remover este convidado?"))
            document.getElementById(id).remove();
    };

  function  editar(id) {
        idEdicao = id
        document.getElementById('tamanhoP').value = document.getElementById(id).textContent
    };

  function  precoNaTela(){

        tamanhoP
        tamanhoM
        tamanhoG 
       TotalaPagar = tamanhoP+tamanhoM+tamanhoG; 

    };

    







let gerenciador = new GerenciadorPedido(); 




