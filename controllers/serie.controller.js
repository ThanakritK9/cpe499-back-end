const Serie  = require('../models/serie.models.js');

const getSeries = async (req, res) => {
    try {
        const series = await Serie.find({});
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSerie = async (req, res) => {
    try {
        const { id } = req.params;
        const serie = await Serie.findById(id);
        res.status(200).json(serie);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createSerie = async (req, res) => {
    try {
        const serie = await Serie.create(req.body);
        res.status(200).json(serie);
    } catch (error) {
        res.status(500).json({ message: error, message });
    }
};

const updateSerie = async (req, res) => {
    try {
        const { id } = req.params;
        const serie = await Serie.findByIdAndUpdate(id, req.body);

        if (!serie) {
            return res.status(404).json({ message: "Serie not found" });
        }
        const updatedSerie = await Serie.findById(id);
        res.status(200).json(updatedSerie);
    } catch (error) {
        res.status(500).json({ message: error, message });
    }
};

const deleteSerie = async (req, res) => {
    try {
        const { id } = req.params;
        const serie = await Serie.findByIdAndDelete(id);
        if (!serie) {
            return res.status(404).json({ message: "Serie not found" });
        }
        res.status(200).json({ message: "Serie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSeries, getSerie, createSerie, updateSerie, deleteSerie
};