import express from "express";
import {
    showJobs
} from '../controllers/homeController.js';

const router = express.Router();

router.get('/', showJobs);

export default router;