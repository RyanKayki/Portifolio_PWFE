var palavra = "BANANA"
      var letrasUsadas = []
      var vidasRestantes = 6

   
      var enigma = "_ ".repeat(palavra.length);
      document.getElementById("enigma").innerHTML = enigma

      function reset(){
        location.reload()
    }





    
      var botoes = document.getElementsByTagName("button")
      for (var i = 0; i < botoes.length; i++) {
          botoes[i].addEventListener("click", function() {
     
              this.disabled = true;

        
              if (palavra.indexOf(this.innerHTML) !== -1) {
                
                  letrasUsadas.push(this.innerHTML)

               
                  var novoEnigma = "";
                  for (var j = 0; j < palavra.length; j++) {
                      if (letrasUsadas.indexOf(palavra[j]) !== -1) {
                          novoEnigma += palavra[j] + " "
                      } else {
                          novoEnigma += "_ "
                      }
                  }
                  document.getElementById("enigma").innerHTML = novoEnigma.trim()

                  if (novoEnigma.indexOf("_") === -1) {
                      document.getElementById("resultado").innerHTML = "Parabéns! Você acertou!"
                      for (var k = 0; k < botoes.length; k++) {
                          botoes[k].disabled = true
                      }
                      document.getElementById("botao-recomecar").style.display = "block" 
                  }
              } else {
                  vidasRestantes--;
                  document.getElementById("vidas").innerHTML = "Vidas restantes: " + vidasRestantes

                 
                  this.classList.add("incorrect")

                
                  if (vidasRestantes === 0) {
                      document.getElementById("resultado").innerHTML = "GAME OVER"
                      for (var k = 0; k < botoes.length; k++) {
                          botoes[k].disabled = true
                      }
                      document.getElementById("botao-recomecar").style.display = "block"

                
                  }
              }
          })
      }