
let contador = 0;
let idEdicao = null

class GerenciadorLista {

    salvar() {
        let nome = document.getElementById('inputConvidado').value
        let idade = document.getElementById('inputIdade').value
        let sexo = document.querySelector('[type=radio]:checked')

        let tabela = document.getElementById('lista')

        let linha = document.createElement('tr')
        let colunaNome = document.createElement('td')
        let colunaIdade = document.createElement('td')
        let colunaSexo = document.createElement('td')
        let colunaEditar = document.createElement('td')
        let colunaRemover = document.createElement('td')

        colunaNome.innerText = nome
        colunaIdade.innerText = idade
        colunaSexo.innerText = sexo.value

        let imagemEditar = document.createElement('img')
        let imagemRemover = document.createElement('img')



        linha.id = 'linha-' + contador;
        contador++;


        imagemRemover.setAttribute("onclick",`gerenciador.remover("${linha.id}")`);

        imagemEditar.setAttribute(
            "onclick",
            `gerenciador.editar("${linha.id}")`
        )

        imagemEditar.setAttribute('src', 'img/editar.svg')
        imagemRemover.setAttribute('src', 'img/delete.svg')

        colunaEditar.appendChild(imagemEditar)
        colunaRemover.appendChild(imagemRemover)

        linha.appendChild(colunaNome)
        linha.appendChild(colunaIdade)
        linha.appendChild(colunaSexo)
        linha.appendChild(colunaEditar)
        linha.appendChild(colunaRemover)

        tabela.appendChild(linha)

    }


             //  


    remover(id) {
        if (confirm("Tem certeza que deseja remover este convidado?"))
            document.getElementById(id).remove();
    }

    editar(id) {
       
        //document.getElementById('inputConvidado').value = document.getElementById(id).children[1].textContent
     

     // document.getElementById('inputConvidado').value =   document.getElementById('tr').textContent
       
     document.getElementById('inputConvidado').value = document.getElementById(id).children[0].textContent
      
     document.getElementById('inputIdade').value = document.getElementById(id).children[1].textContent

    //document.getElementById(lista.id).value = document.getElementById(id).children[2].textContent
     
        
        document.querySelector('[type=radio]:checked').replaceChild
     
      
     // document.getElementById('[type=radio]:checked').value =   document.querySelector('#linha-1').children[1].textContent
      

      //  let linha = tabela.insertRow(id);
      //  let colunaNome= linha.insertCell(id);
      //  let colunaIdade= linha.insertCell(id);
      //  let colunaSexo = linha.insertCell(id);
    }
}

let gerenciador = new GerenciadorLista(); 