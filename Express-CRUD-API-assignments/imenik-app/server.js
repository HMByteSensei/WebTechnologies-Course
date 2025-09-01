const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/unos", function (req, res) {
  res.sendFile(path.join(__dirname, "forma.html"));
});

app.post("/", function (req, res) {
  let tijelo = req.body;
  let novaLinija =
    tijelo["ime"] +
    "," +
    tijelo["prezime"] +
    "," +
    tijelo["adresa"] +
    "," +
    tijelo["broj_telefona"];
  fs.appendFile("imenik.txt", novaLinija + "\r\n", function (err) {
    if (err) throw err;
    fs.readFile("imenik.txt", "utf8", function (err, data) {
      if (err) throw err;
      let rows = data
        .trim()
        .split("\r\n")
        .map((line) => line.split(","));
      let table =
        '<table border="1"><tr><th>Ime</th><th>Prezime</th><th>Adresa</th><th>Broj telefona</th></tr>';
      rows.forEach((row) => {
        table += "<tr>";
        row.forEach((cell) => {
          table += `<td>${cell}</td>`;
        });
        table += "</tr>";
      });
      table += "</table>";
      res.send(table);
    });
  });
});

app.listen(8085);
