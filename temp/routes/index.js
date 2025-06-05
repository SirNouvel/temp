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

router.get('/cosmetology', function (req, res) {
    res.render('cosmetology', { title: 'Cosmetology' });
});

router.get('/test', function (req, res) {
    res.render('test', { title: 'Express' });
});

router.get('/index', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
