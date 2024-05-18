const express = require('express');
const Series = require('../models/serie.models.js');
const router = express.Router();
const { getSeries, getSerie, createSerie, updateSerie, deleteSerie } = require('../controllers/serie.controller.js');

router.get('/', getSeries);
router.get("/:id", getSerie);

router.post("/", createSerie);

// update a Serie
router.put("/:id", updateSerie);

// delete a Serie
router.delete("/:id", deleteSerie);

module.exports = router;