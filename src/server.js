const express = require("express");
const app = express();
app.listen(30005);

const db = require("./database/db");

app.use(express.static("public"));

app.use(express.urlencoded({ extends: true }));
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: app,
    noCache: true
});


app.get("/", (req, res) => {
    return res.render("index.html")
});

app.post("/", (req, res) => {
    const query = `
              INSERT INTO ideias (
                  title,
                  category,
                  image,
                  description,
                  url            
              ) VALUES (?, ?, ?, ?, ?)`

    const values = [
        req.body.title,
        req.body.category,
        req.body.image,
        req.body.description,
        req.body.url

    ];

    function afterInsertData(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Cadastro feito com sucesso!');
            console.log(this);

        }
        return res.redirect("/ideias")
    }
    db.run(query, values, afterInsertData);
})
app.get("/ideias", (req, res) => {

    db.all(`SELECT * FROM ideias`, function(err, rows) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Aqui estão seus registros");
            console.log(rows);

            return res.render("ideias.html", { ideia: rows });
        }

    })
})