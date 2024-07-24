var sequential = require("sequential-ids");

var generator = new sequential.Generator({
    digits: 5,
    restore: "000"
});

generator.start();

module.exports = generator;