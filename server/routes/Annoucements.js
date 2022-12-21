import express from "express";
import {getAllAnnoucements, getAnnoucementById, addNewAnnoucement, updateAnnoucement, deleteAnnoucement, getUserAnnoucements} from '../controllers/AnnoucementsController.js';
const router = express.Router();

router.get('/', getAllAnnoucements);
router.get('/:id', getAnnoucementById);
router.get('/userAnnoucements/:id', getUserAnnoucements);
router.post('/',addNewAnnoucement);
router.put('/:id', updateAnnoucement);
router.delete('/:id', deleteAnnoucement);

export default router;