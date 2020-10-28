



function fecharMenu() {
    document.getElementById("menu").classList.add("fechar-menu")
    document.getElementById("main").classList.add("aumentar-main")
    document.getElementById("btn-menu").classList.add("btn-menu-abrir-exibir")
    document.getElementById("menu").classList.add("fechar-menu");
    document.getElementById("main").classList.add("aumentar-main");
    document.getElementById("btn-menu").classList.add("btn-menu-abrir-exibir");
  }
  
  function abrirMenu() {
    document.getElementById("menu").classList.remove("fechar-menu")
    document.getElementById("main").classList.remove("aumentar-main")
    document.getElementById("btn-menu").classList.remove("btn-menu-abrir-exibir")
    document.getElementById("menu").classList.add("exibir-menu")
    document.getElementById("menu").classList.remove("fechar-menu");
    document.getElementById("main").classList.remove("aumentar-main");
    document.getElementById("btn-menu").classList.remove("btn-menu-abrir-exibir");
    document.getElementById("menu").classList.add("exibir-menu");
  }

  function fecharMensagem(){



  }




  function myFunction() {
    var x = document.createElement("IFRAME");
    x.setAttribute("src", "http://127.0.0.1:5500/DojoFinal/cadastroEmpresa.html");
    document.body.appendChild(x);

  }

class ControleFinanceiro {
    constructor() {
        this.empresas = []
        this.geradorId = 0
        this.empresaEdicao = null
    }

    salvar() {
        let empresaRetornado = this.lerEmpresa()

        if (this.validar(empresaRetornado)) {

            if (this.empresaEdicao == null) {
                this.adicionar(empresaRetornado)
            } else {
                empresaRetornado.id = this.empresaEdicao.id
                this.salvarEdicao(empresaRetornado)
            }

            this.gerarTabela()
        }

        this.cancelar()
    }

    
    
    salvarEdicao(empresa) {
        let posicao = null

        for (let i = 0; i < this.arry.length; i++) {
            if (this.arry[i].id == empresa.id) {
                posicao = i
            }
        }

        if (posicao != null) {
            this.empresas.splice(posicao, 1, empresa)
        }
    }

    adicionar(empresa) {
        empresa.id = this.geradorId
        this.empresas.push(empresa)
        this.geradorId++
    
        this.cancelar()
        this.sincronizarLocalStorage()
        this.gerarTabela()

    }

   

  sincronizarLocalStorage(){

    localStorage.setItem( 'empresas', JSON.stringify(this.empresas) )
    localStorage.setItem('geradorId' , this.geradorId)


  }



  altualizarEstado (){





  }

    lerEmpresa() {
        let empresa = {}

        empresa.nome = document.getElementById('inputNome').value

        empresa.razao = document.getElementById('inputRS').value


        empresa.endereco = document.getElementById('inputEndereco').value

        empresa.cnpj = document.getElementById('inputMarca').value

        return empresa
    }

    gerarTabela() {
        document.getElementById('tabela-corpo').innerHTML = ""

        for (let i = 0; i < this.empresas.length; i++) {
    
        let linha = tabela.insertRow()

        let colunaNome = linha.insertCell(0)
        
        let colunaRazaoSocial = linha.insertCell(1)
        
        let colunaEndereco = linha.insertCell(2)
        
        let colunaCnpj = linha.insertCell(3)
        
        let colunaEditar = linha.insertCell(4)

        let colunaExcluir = linha.insertCell(5)
    
    }
    }

    inserirLinha(empresa) {
        let tabela = document.getElementById('tabela-corpo')

        

        colunaNome.innerText = carro.nome
        colunaMarca.innerText = carro.razao
        colunaAno.innerText = carro.endereco

        let imgEditar = document.createElement('img')
        let imgExcluir = document.createElement('img')

        imgEditar.setAttribute('src', 'img/editar.svg')
        imgExcluir.setAttribute('src', 'img/delete.svg')

        imgEditar.setAttribute('onclick', `estacionamentoController.editar(${JSON.stringify(empresa)})`)
        imgExcluir.setAttribute('onclick', `estacionamentoController.excluir(${empresa.id})`)

        colunaEditar.appendChild(imgEditar)
        colunaExcluir.appendChild(imgExcluir)
    }

    editar(empresa) {
        document.getElementById('inputNome').value = empresa.nome

        document.getElementById('inputRS').value = empresa.razao

        document.getElementById('inputEndereco').value = empresa.endereco

        document.getElementById('inputCnpj').value = empresa.cnpj

        this.empresaEdicao = empresa
    }

    alterarStatus(Endereco) {
        let posicao = null

        for (let i = 0; i < this.estacionamento.length; i++) {
            if (this.estacionamento[i].id == idCarro) {
                posicao = i
            }
        }

        if (posicao != null) {
            this.estacionamento.splice(posicao, 1)
        }

        this.gerarTabela()
    }

    cancelar() {
        document.getElementById('inputNome').value = ""
        document.getElementById('inputRs').value = ""
        document.getElementById('inputEndereco').value = ""
        document.getElementById('inputCnpj').value = ""
        this.empresaEdicao = null
    }

    validar(empresa) {
        if (empresa.nome != "" && empresa != "" && carro.ano != "") {
            return true
        }

        alert("Preencha todos os campos!")
        return false
    }

}

let empresa = new ControleFinanceiro() ;