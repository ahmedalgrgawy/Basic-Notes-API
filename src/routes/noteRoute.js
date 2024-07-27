var express = require('express')
var noteController = require('../controllers/noteController');
var router = express.Router()

router.get('/notes', () => {
    noteController.getAllNotes()
})

router.post('/notes/save', () => {
    noteController.saveNote()
})

router.put('/notes/update/', () => {
    noteController.updateNote()
})

router.delete('/notes/delete/:id', () => {
    noteController.deleteNote()
})


module.exports = router