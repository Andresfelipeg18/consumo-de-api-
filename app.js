
const button= document.getElementById('fetch-quote')
const carta = document.getElementById('quote-container');

button.addEventListener("click", () => {
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then(([{ quote, character, image }]) => {
      carta.innerHTML =
        `<img src="${image}" alt="${character}">
         <p>${character}</p>
         <hr>
        <p>${quote}</p>
       `;
    })
    .catch(console.error);
});

