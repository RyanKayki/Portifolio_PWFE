function mostrarImagemAmpliada(src) {
    var imagemAmpliada = document.getElementById('imagem-ampliada');
    var imagemAmpliadaOverlay = document.getElementById('imagem-ampliada-overlay');
    
    imagemAmpliada.src = src;
    imagemAmpliadaOverlay.style.display = 'block';
}

function fecharImagemAmpliada() {
    var imagemAmpliadaOverlay = document.getElementById('imagem-ampliada-overlay');
    imagemAmpliadaOverlay.style.display = 'none';
}

