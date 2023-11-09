/**
*   Sfruttando l’api https://api.chucknorris.io/jokes/random creare un applicazione che scarica una battuta random, la aggiunge ad un file json norrisDb.json e la mostra all’utente.
    Il file json quindi dovrà contenere la lista di tutte le battute scaricate nell’arco del tempo.
    E ricordate, con Chuck Norris le API non hanno il coraggio di ritornare un errore, per paura che Chuck le punisca.
    BONUS:
    Quando viene scaricata una battuta, controllare che questa non sia già presente nel file json locale. Se lo è, caricare un altra battuta.
*/
const loadData = require("./utilities/loadData");
const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  loadData(res);
  //   res.setHeader("Content-Type", "text/html;charset=utf-8");
});

server.listen(port, () => {
  console.log("Server is running in port http://localhost:" + port);
});
