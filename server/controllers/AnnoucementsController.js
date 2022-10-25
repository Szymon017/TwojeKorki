import Annoucement from "../models/Annoucement.js";

const getAllAnnoucements = async (req, res) => {
    const page = req.query.p || 0; 
    const annoucementsPerPage = 15;

    try {
        const annoucements = await Annoucement.find({}).skip(page*annoucementsPerPage).limit(annoucementsPerPage);
        res.status(200).json({
            status: 'Successfully got an annoucement',
            results: annoucements.length,
            data: {
                annoucements
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed to get all annoucements",
            message: error
        })
    }
}

const getAnnoucementById = async (req, res) => {
    try {
        const annoucement = await Annoucement.findOne({ _id: req.params.id });
        res.status(200).json({
            status: 'Successfully got all annoucements',
            results: annoucement.length,
            data: {
                annoucement
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed to get an annoucement",
            message: error
        })
    }
}

const addNewAnnoucement = async (req, res) => {
    try {

    } catch (error) {

    }
}

const updateAnnoucement = async (req, res) => {
    try {

    } catch (error) {

    }
}

const deleteAnnoucement = async (req, res) => {
    try {

    } catch (error) {

    }
}

export {
    getAllAnnoucements,
    getAnnoucementById,
    addNewAnnoucement,
    updateAnnoucement,
    deleteAnnoucement
}