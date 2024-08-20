import express from 'express';
import getnotes from '../controller/controller.notes.js'; 

const router = express.Router();

router.get('/getnotes', getnotes);

export default router;
