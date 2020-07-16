/* C'est ici qu'il faut rédiger ton code pour utiliser l'API */
let getRandomQuotes = () => {
  let randomNumber = Math.floor(Math.random() * Math.floor(1643));
  fetch('https://type.fit/api/quotes')
    .then(response => {
      return response.json();
    })
    .then(response => {
      let data = response[randomNumber];
      console.log(data);
      document.getElementById('quotes').textContent = data.text;
      if (data.author === null || data.author === undefined) {
        document.getElementById('author').textContent = "l'auteur est inconnu";
      } else {
        document.getElementById('author').textContent = data.author;
      }
    });
};
getRandomQuotes();
document.getElementById('btn-alerte').addEventListener('click', () => {
  getRandomQuotes();
});
