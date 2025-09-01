const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta za vraćanje svih zadataka
app.get("/zadaci", (req, res) => {
  const results = [];
  fs.createReadStream("zadaci.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    });
});

// Ruta za dodavanje novog zadatka
app.post("/zadatak", (req, res) => {
  const noviZadatak = req.body;
  const results = [];
  let idPostoji = false;

  fs.createReadStream("zadaci.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
      if (data.id === noviZadatak.id) {
        idPostoji = true;
      }
    })
    .on("end", () => {
      if (idPostoji) {
        res.json({ status: "Id vec postoji!" });
      } else {
        const noviRed = `${noviZadatak.id},${noviZadatak.naziv},${noviZadatak.opis}\n`;
        fs.appendFile("zadaci.csv", noviRed, (err) => {
          if (err) throw err;
          res.json({ status: "Zadatak je uspjesno dodan!" });
        });
      }
    });
});

// Ruta za ažuriranje postojećeg zadatka
app.put("/zadatak/:id", (req, res) => {
  const zadatakId = req.params.id;
  const azuriraniZadatak = req.body;
  const results = [];
  let idPostoji = false;

  fs.createReadStream("zadaci.csv")
    .pipe(csv())
    .on("data", (data) => {
      if (data.id === zadatakId) {
        idPostoji = true;
        data.naziv = azuriraniZadatak.naziv;
        data.opis = azuriraniZadatak.opis;
      }
      results.push(data);
    })
    .on("end", () => {
      if (!idPostoji) {
        res.json({ status: "Id ne postoji!" });
      } else {
        const csvData = results
          .map((row) => `${row.id},${row.naziv},${row.opis}`)
          .join("\n");
        fs.writeFile("zadaci.csv", csvData + "\n", (err) => {
          if (err) throw err;
          res.json({ status: "Zadatak je uspjesno azuriran!" });
        });
      }
    });
});

app.listen(8085, () => {
  console.log("Server is running on port 8085");
});
