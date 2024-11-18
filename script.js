document.addEventListener('DOMContentLoaded', () => {
  const screens = document.querySelectorAll('.screen');
  let currentScreenIndex = 0;

  const showScreen = (index) => {
    screens.forEach((screen, i) => {
      screen.classList.toggle('active', i === index);
    });
  };

  const nextScreen = () => {
    currentScreenIndex = (currentScreenIndex + 1) % screens.length;
    showScreen(currentScreenIndex);
  };

  const prevScreen = () => {
    currentScreenIndex = (currentScreenIndex - 1 + screens.length) % screens.length;
    showScreen(currentScreenIndex);
  };

  let startX, startY;

  document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  document.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        nextScreen(); // Arraste da direita para a esquerda
      } else {
        prevScreen(); // Arraste da esquerda para a direita
      }
    } else {
      if (diffY > 0) {
        nextScreen(); // Arraste de baixo para cima
      } else {
        prevScreen(); // Arraste de cima para baixo
      }
    }
  });

  document.addEventListener('click', () => {
    const clickSound = document.getElementById('click-sound');
    clickSound.play().catch(error => {
      console.log('Erro ao reproduzir o som:', error);
    });
    nextScreen();
  });
});
