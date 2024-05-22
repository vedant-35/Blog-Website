const express = require("express");
const articleRouter = require("./routes/articles");
//const Article = require('./models/article');
const mongoose = require("mongoose");
//const methodOverride = require('method-override');
const app = express();

mongoose.connect("mongodb://localhost/bharatInternDatabase");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const articles = [
    {
      titles: "Test Article 1",
      createdAt: new Date(),
      description: "Test Description",
    },
    {
      titles: "Test Article 2",
      createdAt: new Date(),
      description: "Test Description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(3000);
