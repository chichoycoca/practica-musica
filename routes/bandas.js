const express = require('express');
const router= express.Router();

const db = require('../db/index');
const bandasController = require('../controllers/bandasController');

//router.get('/', function(req,res) {
  //  return res.send(db.lista)
//})
router.get('/', bandasController.index)
router.get('/id/:id', bandasController.filtrarPorId)
router.get('/genero/:genero', bandasController.filtrarPorGenero)


module.exports= router;