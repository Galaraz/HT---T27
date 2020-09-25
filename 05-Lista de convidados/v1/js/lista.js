
 //document.addEventListener('keypress', function(e)){
 //   if (e.which == 13) {
  //     salvar();
  //  }
//}else{} ;



let contador = 0;
let idEdicao = null;

class GerenciadorLista {


   

    salvar() {
        let inputN = document.getElementById("inputConvidadoN").value;
        let inputI = document.getElementById("inputConvidadoI").value;
        let inputS = document.querySelector('[type=radio]:checked');
                
        let tabela = document.getElementById('lista')

        

       
                //Criando os elementos para o novo item da lista
                let linha= document.createElement("tr");
                let tabela = document.createElement("td");
                let colunaRemover = document.createElement("td");
                let colunaEditar = document.createElement("td");
                let colunaNome = document.createElement('td');
                let colunaIdade = document.createElement('td');
                let colunaSexo = document.createElement('td');
                

                //Adicionando o id da div com contador e incrementando
                linha.id = 'linha-' + contador;
                contador++;

                //Setando os valores dos elementos
                colunaNome.innerText = inputN;
                colunaIdade.innerText = inputI;
                colunaSexo.innerText = sexo.value;
                imgRemover.src = "img/delete.svg";
                imgEditar.src = "img/editar.svg";

                // imgRemover.setAttribute('onclick', "gerenciador.remover('" + divNova.id + "')")
                imgRemover.setAttribute(
                    "onclick",
                    `gerenciador.remover('${linha.id}')`
                );

                imgEditar.setAttribute(
                    "onclick",
                    `gerenciador.editar('${tabela.id}')`
                );
                //gerenciador.remover('item-0')

           // adicionarLinhas (){

             //   let linha = tabela.insertRow();
             //   let colunaNome= linha.insertCell();
             //   let colunaIdade= linha.insertCell();
              //  let colunaSexo = linha.insertCell();

            //}
                linha.appendChild(colunaNome);
                linha.appendChild(colunaIdade);
                linha.appendChild(colunaSexo);
                linha.appendChild(imgRemover);
                linha.appendChild(imgEditar);
                
                tabela.appendChild(linha);




        }
    }

    remover(tr) {

        if (confirm("Tem certeza que deseja remover este convidado?"))
            document.getElementById(tr).remove();
    }

    editar(id) {
        linha = id
        document.getElementById('inputConvidado').value = document.getElementById(id).textContent
    }



    







let gerenciador = new GerenciadorLista(); 