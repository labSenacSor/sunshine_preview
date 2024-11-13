const screens = document.querySelectorAll('.screen');
let currentScreen = 0;

screens[currentScreen].classList.add('active'); // Mostra a primeira tela

screens.forEach((screen, index) => {
  screen.addEventListener('click', () => {
    // Remove a classe 'active' da tela atual
    screens[currentScreen].classList.remove('active');

    // Calcula o índice da próxima tela
    currentScreen = (currentScreen + 1) % screens.length; // Garante que volte para a primeira tela após a última

    // Adiciona a classe 'active' à próxima tela
    screens[currentScreen].classList.add('active');
  });
});