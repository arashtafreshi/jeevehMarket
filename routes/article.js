var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../models/Article.js');

/* GET ALL ArticleS */
router.get('/', function(req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.json(articles);
  }).select('-_id -__v');
});

/* GET SINGLE Article BY ID */
router.get('/:id', function(req, res, next) {
  Article.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Article */
router.post('/', function(req, res, next) {
  Article.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Article */
router.put('/:id', function(req, res, next) {
  Article.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Article */
router.delete('/:id', function(req, res, next) {
  Article.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;