const express = require('express')
const { getAllNotes, saveNote, updateNote, deleteNote } = require('../controllers/noteController')
const router = express.Router()

router.get('/notes', () => {
    getAllNotes()
})

router.post('/notes/save', () => {
    saveNote()
})

router.put('/notes/update/:id', () => {
    updateNote()
})

router.delete('/notes/delete/:id', () => {
    deleteNote()
})


module.exports = router