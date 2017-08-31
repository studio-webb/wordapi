const express = require('express');
const router = express.Router();

const model = require('../models/wordapi');

const axios = require('axios');

const encrypted = 'OjPpqZNyeimshoIYZi7DP2GXuY74p120cKMjsnGL4ltGRO4eUY';
const url = 'https://wordsapiv1.p.mashape.com/words';
const config = {
    headers: { 'Accept': 'text/plain', 'X-Mashape-Key': encrypted },
    timeout: 5000
};

router.get('/wordapi/:word/:type', (req, res) => {

    model.get(`${req.params.word}:${req.params.type}`, (err, list) => {
        if (err || !list) {
            axios.get(`${url}/${req.params.word}/${req.params.type}`, config)
                .then(result => {
                    res.status(200).json(result.data);
                    return result;
                })
                .then(result => {
                    let list = result.data;
                    list._id = `${req.params.word}:${req.params.type}`;
                    model.save(list);
                })
                .catch(error => {
                    console.log('ERROR REQUEST: ', error.response.status, error.response.statusText);
                    let list = {_id: `${req.params.word}:${req.params.type}`, word: req.params.word, synonyms: []};
                    model.save(list);
                    res.status(200).json(list);
                });
        } else {
            res.status(200).json(list);
        }
    });
});

module.exports = router;