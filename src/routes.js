import express from 'express';
import {
  createNote,
  deleteNoteById,
  editNoteById,
  getNotes,
  getNoteById,
} from './controller.js';

const router = express.Router();
router.post('/notes', createNote);
router.get('/notes/:id', getNoteById);
router.get('/notes', getNotes);
router.put('/notes/:id', editNoteById);
router.delete('/notes/:id', deleteNoteById);

export default router;
