const json = require('body-parser/lib/types/json');
const generator = require('../utils/generator')
const memory = require('../utils/memory.storage')

exports.getAllNotes = (req, res) => {
    var id = generator.generate();
    var id2 = generator.generate();

    memory.store.setItem(id, "test 1")
    memory.store.setItem(id2, "test 2")

    var keys = memory.getKeys()
    var values = memory.getValues()

    console.log(json.stringify(keys) + " - " + json.stringify(values))
    // res.send(keys + " - " + values)

}

exports.saveNote = (req, res) => {
    res.send("saveNote notes...")
}

exports.updateNote = (req, res) => {
    res.send("updateNote notes...")
}

exports.deleteNote = (req, res) => {
    res.send("deleteNote notes...")
}