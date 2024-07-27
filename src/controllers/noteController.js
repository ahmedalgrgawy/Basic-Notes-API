var json = require('body-parser/lib/types/json');
var generator = require('../utils/generator')
var memory = require('../utils/memory.storage');
var model = require('../models/note.model');


exports.getAllNotes = (req, res) => {
    // var keys = memory.getKeys()
    var values = memory.getValues()

    return res.status(201).send(JSON.stringify(values))

}

exports.saveNote = (req, res) => {

    var id = generator.generate();
    var createdBy = "admin"
    var createdOn = new Date()

    var { title, content } = req.body

    if (!title || !content) {
        return res.status(500).send({ error: "Title and Content is Required" })
    }

    var Note = model.Note
    var noteObj = new Note(id, title, content, createdBy, createdOn)

    memory.store.setItem(id, noteObj)

    return res.status(201).send({ message: "Note Saved" })

}

exports.updateNote = (req, res) => {
    var createdBy = "admin"
    var createdOn = new Date()

    var { noteId, title, content } = req.body

    if (!noteId) {
        return res.status(500).send({ error: "Note Id is Required" })
    }

    if (!title || !content) {
        return res.status(500).send({ error: "Title and Content is Required" })
    }

    var note = memory.store.getItem(noteId)

    if (!note) {
        return res.status(500).send({ error: "Note does not exist" })
    }

    var Note = model.Note
    var noteObj = new Note(noteId, title, content, createdBy, createdOn)

    memory.store.setItem(id, noteObj)

    return res.status(200).send({ message: "Note Updated" })


}

exports.deleteNote = (req, res) => {
    var noteId = req.params.noteId;

    if (!noteId) {
        return res.status(500).send({ error: "Can Not Delete Empty Delete" })
    }

    var note = memory.store.getItem(noteId)

    if (!note) {
        return res.status(500).send({ error: "Note does not exist" })
    }

    memory.store.removeItem(noteId)

    return res.status(200).send({ message: "Note Deleted" })

}