// Funções de acessibilidade
function changeFontSize(action) {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    if (action === 'increase') {
        document.body.style.fontSize = (currentSize + 2) + 'px';
    } else if (action === 'decrease') {
        document.body.style.fontSize = (currentSize - 2) + 'px';
    }
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    if (document.body.classList.contains('high-contrast')) {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = '#000';
            card.style.border = '2px solid #fff';
        });
    } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = '';
            card.style.border = '';
        });
    }
}

// Simulação de dados de partidas (em um cenário real, viria de uma API)
document.addEventListener('DOMContentLoaded', function() {
    // Aqui você poderia buscar dados reais de uma API
    console.log('Site Pixote carregado!');
    
    // Adicionar eventos aos botões de odds
    const oddButtons = document.querySelectorAll('.odd-btn');
    oddButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Aposta selecionada: ' + this.textContent);
        });
    });
    
    // Adicionar eventos aos botões de promoção
    const promoButtons = document.querySelectorAll('.promo-btn');
    promoButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Redirecionando para o jogo Tigrinho!');
        });
    });
    
    // Adicionar eventos aos botões de navegação
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Navegando para: ' + this.textContent);
        });
    });
});