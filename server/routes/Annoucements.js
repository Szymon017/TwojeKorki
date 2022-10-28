import express from "express";
import {getAllAnnoucements, getAnnoucementById, addNewAnnoucement, updateAnnoucement, deleteAnnoucement} from '../controllers/AnnoucementsController.js';
import annoucementValidator from "../middleware/validation/annoucementValidator.js";
const router = express.Router();

router.get('/', getAllAnnoucements);
router.get('/:id', getAnnoucementById);
router.post('/', annoucementValidator,addNewAnnoucement);
router.patch('/:id', updateAnnoucement);
router.delete('/:id', deleteAnnoucement);

export default router;