class Calculadora {

  somar() {
      let n1 = parseFloat(document.getElementById("n1").value)
      let n2 = parseFloat(document.getElementById("n2").value)

      let soma = n1 + n2

      alert("O resultado da soma é: " + soma)
  }
}

let calculadora = new Calculadora() 