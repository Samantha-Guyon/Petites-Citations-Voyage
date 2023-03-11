const reviewDiv = document.querySelector('.review');
const btnGood = document.querySelector('.btn_good');
const btnBad = document.querySelector('.btn_bad');

btnGood.addEventListener('click', () => {
    reviewDiv.innerHTML = "<h5>Yeah ! C'est une bonne réponse ! 😃 </h5>";
});

btnBad.addEventListener('click', () => {
    reviewDiv.innerHTML = "<h5>Hoo...j'aurais dû mieux choisir mes citations 😢</h5>";
});