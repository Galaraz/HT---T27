

class GeradorDeTarefa {


    constructor() {
        this.tarefas = []
        this.geradorId = 0
        this.tarefaEdicao = null


    }



    salvar() {

        let retornaTarefa = this.lerTarefa()

        if (this.validar(retornaTarefa)) {

            if (this.tarefaEdicao == null) {
                this.adiconar(retornaTarefa)

            } else {
                retornaTarefa.id = this.tarefaEdicao.id
                this.salvarEdicao(retornaTarefa)

            }
            this.gerarTabela()

        }

        this.cancelar()
    }




    salvarEdicao(tarefa) {

        let posicao = null

        for (let i = 0; i < this.tarefas.length; i++) {
            if (this.tarefas[i].id == tarefa.id) {

                posicao = i
            }

        }
        if (posicao != null) {


            this.tarefas.splice(posicao, 1, tarefa)

        }

    }



    adiconar(tarefa) {


        tarefa.id = this.geradorId
        this.tarefas.push(tarefa)
        this.geradorId++


    }


    lerTarefa() {

        let tarefa = {}
        tarefa.descricao = document.getElementById('inputTarefa').value
        tarefa.concluida = false

        return tarefa

    }



gerarTabela(){

document.getElementById('tabela-corpo').innerHTML=""

for (let i = 0; i < this.tarefas.length;i++){

    this.inserirLinha(this.tarefas[i])

}



}



    inserirLinha(tarefa) {

        let tabela = document.getElementById('tabela-corpo')

        let linha = tabela.insertRow()
        let colunacheck = linha.insertCell(0)
        let colunaTarefa = linha.insertCell(1)
        let colunaExcluir = linha.insertCell(2)
        let colunaEditar = linha.insertCell(3)



        colunaTarefa.innerText = tarefa.descricao

        let imgCheck = document.createElement('img')
        let imgEditar = document.createElement('img')
        let imgExcluir = document.createElement('img')




        imgCheck.setAttribute('src', 'img/check.svg')
        imgCheck.setAttribute('onclick', `Tarefa.check(${tarefa.id})`)



        imgEditar.setAttribute('src', 'img/editar.svg')
        imgEditar.setAttribute('onclick', `Tarefa.editar(${tarefa.id})`)



        imgExcluir.setAttribute('src', 'img/delete.svg')
        imgExcluir.setAttribute('onclick', `Tarefa.excluir(${tarefa.id})`)




        colunacheck.appendChild(imgCheck)
        colunaEditar.appendChild(imgEditar)
        colunaExcluir.appendChild(imgExcluir)




    }



    editar (tarefa){

        document.getElementById('inputTarefa').value= tarefa.descricao

        this.tarefaEdicao = tarefa
       // document.getElementById("imgSalvar").src = "img/go.svg"

    }





    excluir(idTarefa) {
       
            let posicao = null

            for (let i = 0; i < this.tarefas.length; i++) {

                if (this.tarefas[i].id == idTarefa) {
                    posicao = i
                }



            }

            if (posicao != null) {

                this.tarefas.splice(posicao, 1)

            }


        

         this.gerarTabela()

    
        }


cancelar (){

document.getElementById('inputTarefa').value= ""

this.tarefaEdicao =  null

}



validar(tarefa){


if (tarefa.descricao!= ""){

return true

}

alert ("preencha todos os campos!")
return false 

}





  

    
}

let Tarefa = new GeradorDeTarefa(); 