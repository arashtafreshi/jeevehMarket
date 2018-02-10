var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    header: String,
    body: String,
    image: String,
    author: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);