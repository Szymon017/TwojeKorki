import express from 'express';
import { getAllReports, createNewReport, getReport } from '../controllers/ReportsController.js'
const router = express.Router();

router.get('/', getAllReports);
router.post('/', createNewReport)
router.get('/:id', getReport);


export default router;