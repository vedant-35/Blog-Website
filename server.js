const express = require('express');
const articleRouter = require("./routes/articles");
//const Article = require('./models/article');
const mongoose = require('mongoose');
//const methodOverride = require('method-override');
const app = express();

mongoose.connect('mongodb://localhost/bharatInternDatabase');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
})

app.use('/articles', articleRouter);

app.listen(3000)