import express from 'express';
import { getAllReports, createNewReport, getReport, deleteReport } from '../controllers/ReportsController.js'
const router = express.Router();

router.get('/', getAllReports);
router.post('/', createNewReport)
router.delete('/:id', deleteReport)
router.get('/:id', getReport);

export default router;