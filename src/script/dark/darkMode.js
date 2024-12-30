export default function darkMode() {
  const dataDark = document.querySelectorAll('[data-dark');
  const dataDarkColor = document.querySelectorAll('[data-dark-color]');
  const dataDarkModeIcone = document.querySelector('[data-dark-mode-icone]');
  const dataLightkModeIcone = document.querySelector('[data-light-mode-icone]');

  let darkModeOn = false;

  dataDarkModeIcone.addEventListener('click', () => {
    darkModeOn = true;
    ativarDarkMode(darkModeOn);
    dataDarkModeIcone.classList.add('hidden');
    dataLightkModeIcone.classList.remove('hidden');
  });
  dataLightkModeIcone.addEventListener('click', () => {
    dataDarkModeIcone.classList.remove('hidden');
    dataLightkModeIcone.classList.add('hidden');
    darkModeOn = false;
    ativarDarkMode(darkModeOn);
  });

  function ativarDarkMode(on) {
    console.log(on);
    if (on) {
      dataDark.forEach((itemCor) => {
        const corDark = itemCor.dataset.dark;
        itemCor.style.background = corDark;
      });
      dataDarkColor.forEach((itemCor) => {
        const corDark = itemCor.dataset.darkColor;
        itemCor.style.color = corDark;
        console.log(corDark);
      });
    } else {
      dataDark.forEach((itemCor) => {
        const corDark = itemCor.dataset.dark;
        itemCor.style.background = 'initial';
      });
      dataDarkColor.forEach((itemCor) => {
        const corDark = itemCor.dataset.darkColor;
        itemCor.style.color = 'initial';
        console.log(corDark);
      });
      console.log('else');
    }
  }
}
