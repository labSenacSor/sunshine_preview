const screens = document.querySelectorAll('.screen');
let currentScreen = 0;

screens[currentScreen].classList.add('active'); // Mostra a primeira tela

// Função para mudar a tela
function changeScreen() {
  screens[currentScreen].classList.remove('active');
  currentScreen = (currentScreen + 1) % screens.length;
  screens[currentScreen].classList.add('active');
}

// Adiciona evento de clique para mudar a tela
screens.forEach((screen) => {
  screen.addEventListener('click', changeScreen);
});

// Variáveis para armazenar a posição inicial do toque
let startX = 0;
let startY = 0;

// Detecta o início do toque
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

// Detecta o movimento do toque
document.addEventListener('touchmove', (e) => {
  if (!startX || !startY) {
    return;
  }

  let endX = e.touches[0].clientX;
  let endY = e.touches[0].clientY;

  let diffX = startX - endX;
  let diffY = startY - endY;

  // Verifica se o movimento foi para a esquerda ou para cima
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      // Movimento para a esquerda
      changeScreen();
    }
  } else {
    if (diffY > 0) {
      // Movimento para cima
      changeScreen();
    }
  }

  // Reseta os valores de início do toque
  startX = 0;
  startY = 0;
});
