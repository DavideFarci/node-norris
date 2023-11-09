const fs = require("fs");
const path = require("path");

function loadData(res) {
  const url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const arr = readNorris();
      const newJoke = { joke: `${data.value}` };
      arr.push(newJoke);
      writeDataOnJson(arr);
      res.setHeader("Content-Type", "text/html;charset=utf-8");
      res.end(`<h1>${data.value}</h1>`);
    });
}

function readNorris() {
  // creiamo il path per il file users.json
  const norrisPath = path.join(__dirname, "../utilities", "norrisDb.json");

  try {
    /**
     * @type {string}
     */
    const norris = fs.readFileSync(norrisPath, "utf-8");

    // Converto la stringa in un array di oggetti
    return JSON.parse(norris);
  } catch (err) {
    console.log(err.message);
    return [];
  }
}

function writeDataOnJson(joke) {
  const norrisPath = path.join(__dirname, "../utilities", "norrisDb.json");
  const norrisJson = JSON.stringify(joke);

  try {
    fs.writeFileSync(norrisPath, norrisJson);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = loadData;
