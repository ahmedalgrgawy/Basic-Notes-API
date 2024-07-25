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

    const { title, content } = req.body

    if (!title || !content) {
        return res.status(500).send({ error: "Title and Content is Required" })
    }

    var Note = model.Note
    var noteObj = new Note(id, title, content, createdBy, createdOn)

    memory.store.setItem(id, noteObj)

    return res.status(201).send({ message: "Note Saved" })

}

exports.updateNote = (req, res) => {
    res.send("updateNote notes...")
}

exports.deleteNote = (req, res) => {
    res.send("deleteNote notes...")
}