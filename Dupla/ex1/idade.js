function calcularIdade() {

    let nome = document.getElementById("nome").value
    let anoNascimento = document.getElementById("ano-nascimento").value


    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let idade = anoAtual - anoNascimento + 1


    let mesAtual = dataAtual.getMonth() + 1
    let diaAtual = dataAtual.getDate()
    if (mesAtual < 10 || (mesAtual === 10 && diaAtual < 22)) {
      idade--
    }

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `${nome}, sua idade é ${idade} anos.`
  }
  