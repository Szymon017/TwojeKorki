import express from 'express';
import { deleteReview, getAllReviews, getUserReviews, sendReview, updateReview } from '../controllers/ReviewController.js';


const router = express.Router();

router.get('/', getAllReviews);
router.get('/:id', getUserReviews);
router.post('/', sendReview)
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;