const palavras = ['gato', 'cachorro', 'elefante', 'tigre']
        let palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)]
        let vidas = 2

        const enigmas = {
            'gato': 'Eu sou um animal que tem uma visão noturna incrível, sou capaz de enxergar no escuro e detectar movimentos que outros animais não conseguem perceber. Minha audição aguçada me permite ouvir sons que estão muito longe e também aqueles que estão muito próximos',
            'cachorro': 'Sou um animal de quatro patas, leal e protetor, com um faro aguçado e um instinto caçador minha inteligência é notável e versátil.',
            'elefante': 'O que é um animal que tem uma força que pode derrubar árvores, mas é gentil o suficiente para pegar uma única folha sem rasgá-la?',
            'tigre': 'Sou um felino selvagem, rápido e furtivo com manchas na pelagem, um caçador ativo minha agilidade é impressionante e letal e minha presa não tem chance de escapar do meu arsenal. '
            
        }

        
        document.getElementById("enigma").innerHTML = enigmas[palavraAleatoria]

        function verificarPalpite(palpite) {
            if (palpite === palavraAleatoria) {
                document.getElementById("resultado").innerHTML = "Parabéns! Você acertou!"
                document.getElementById("resultado").classList.add("correct")
                desativarBotoes()
            } else {
                document.getElementById("resultado").innerHTML = "Tente novamente."
                document.getElementById("resultado").classList.remove("correct")
                vidas--
                document.getElementById("vidas").innerHTML = `Vidas: ${vidas}`
                if (vidas === 0) {
                    gameOver()
                }
            }
        }

        function desativarBotoes() {
            const botoes = document.querySelectorAll(".button-container button")
            for (const botao of botoes) {
                botao.classList.add("disabled")
                botao.disabled = true
            }
        }

        function gameOver() {
            document.getElementById("game-over").style.display = "block"
            const reiniciarBotao = document.querySelectorAll(".button-container button")[5]
            reiniciarBotao.addEventListener("click", function() {
                window.location.reload()
            })

        }