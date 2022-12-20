import mongoose from "mongoose";
import Review from "../models/Review.js";

const getAllReviews = async (req, res) => {
    try {
        const result = await Review.find({});
        res.status(200).json({
            status: "Pomyślnie pobrano wszystkie opinie",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: "Nie można pobrać opinii",
            message: error.message
        })

    }
}

const getUserReviews = async (req, res) => {
    try {
        const result = await Review.find({ user: req.params.id }).populate("author")

        res.status(200).json({
            status: "Pomyślnie pobrano opinie",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: "Problem z pobraniem opinii",
            message: error.message
        })
    }
}

const sendReview = async (req, res) => {
    const {
        author,
        user,
    } = req.body;

    const rate = req.body.option;
    const message = req.body.com;

    try {

        if (!author || !user || !message || !rate) {
            res.status(500).json({
                status: "Nie udało się wystawić opinii",
                message: "Pola nie mogą być puste"
            })
        }

        const result = Review.create({ author, user, message, rate })
        res.status(200).json({
            status: "Pomyślnie dodano ocenę",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: "Nie udało się dodac opinii",
            message: error.message
        })
    }
}

const deleteReview = async (req, res) => {
    try {
        const result = await Review.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
            status: "Pomyślnie usunięto opinię"
        })
    } catch (error) {
        res.status(500).json({
            status: "Nie udało się usunąć opinii",
            message: error.message
        })
    }
}

const updateReview = async (req, res) => {
    try {
        const result = await Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json({
            status: "Pomyślnie edytowano opinię",
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            status: "Nie udało się edytować wiadomości",
            message: error.message
        })
    }
}

export {
    getAllReviews,
    getUserReviews,
    sendReview,
    deleteReview,
    updateReview
}