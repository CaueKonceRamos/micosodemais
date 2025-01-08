let lastNoButtonPosition = { x: '50%', y: '50%' };

// Função para mover o botão "Não" para uma posição aleatória na tela
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Salva a posição atual do botão "Não"
    lastNoButtonPosition = { x: noButton.style.left, y: noButton.style.top };

    // Calcula uma nova posição dentro da tela
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    // Move o botão "Não" para a nova posição
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Move o botão "Sim" para a posição anterior do botão "Não"
    yesButton.style.left = lastNoButtonPosition.x;
    yesButton.style.top = lastNoButtonPosition.y;
}

// Função chamada ao clicar no botão "Sim"
function onYesClick() {
    alert("Você aceitou! ❤️");
}
