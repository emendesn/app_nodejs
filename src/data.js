const mongo = require('mongoose');

/* mongo.connect('mongodb://localhost:27017/app_rest', { useMongoClient: true}); */
mongo.connect('mongodb://localhost:27017/app_rest', { useNewUrlParser: true, useUnifiedTopology: true});

mongo.Promise = global.Promise;

module.exports = mongo;