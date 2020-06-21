const mongo = require('./data');

const vei_schema = new mongo.Schema({
    proprietario: {
        type: String,
        require: true,
    },
    placa: {
        type:String,
        require: true,
    },
    renavan: {
        type: Number,
        require: true,
    }
});

const Vei = mongo.model('Vei', vei_schema );

module.exports = Vei;