'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/info', function (req, res) {
    res.render('info', { title: 'Express' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: 'Express' });
});

router.get('/story', function (req, res) {
    res.render('story', { title: 'Express' });
});

module.exports = router;
