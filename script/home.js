document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('lotebt');

    // Define o destino do link dinamicamente
    link.href = 'lote.html'; // Substitua pelo URL da página desejada
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('detalhe_pedidobt');

    // Define o destino do link dinamicamente
    link.href = 'detalhe_pedido.html'; // Substitua pelo URL da página desejada
});

document.addEventListener('DOMContentLoaded', function() {
        const link = document.getElementById('alimentobt');

    // Define o destino do link dinamicamente
    link.href = 'alimento.html'; // Substitua pelo URL da página desejada
});

document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('buscar_produtobt');

// Define o destino do link dinamicamente
link.href = 'buscar_produto.html'; // Substitua pelo URL da página desejada
});


function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;
}

setInterval(updateTime, 1000); // Atualiza a cada segundo
updateTime(); 