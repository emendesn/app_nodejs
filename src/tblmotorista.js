const mongo = require('./data');

const mot_schema = new mongo.Schema({
    nome: {
        type: String,
        require: true,
    },
    sobrenome: {
        type:String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    nascimento: {
        type: Date,
    },
    status: {
        type: String,
        require: true,
        default: 'A',
    },
    cadastro: {
        type: Date,
        default: Date.now,
    },
    atualizacao: {
        type: Date,
        default: Date.now,
    },
    veiculos: [{
        type: mongo.Schema.Types.ObjectId,
        ref: 'Vei',
    }],
});

const Mot = mongo.model('Mot', mot_schema );

module.exports = Mot;