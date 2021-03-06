var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    header: String,
    body: String,
    image: String,
    author: String,
    date: { type: Date, default: Date.now },
    releaseDate: Date,
    content: String,
    tags:[String]
});

module.exports = mongoose.model('Article', ArticleSchema);