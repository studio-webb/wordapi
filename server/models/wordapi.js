const mongojs = require('mongojs');
const db = mongojs('mongodb://dbadmin:admin123@ds163613.mlab.com:63613/wordapi', ['list']);


exports.get = function (id, cb) {
    db.list.findOne({ _id: id}, function (err, result) {
        cb(err, result);
    });
}

exports.save = function (obj, cb) {
    db.list.save(obj, function (err, result) {
        if(err) console.log('ERROR SAVE: ', err);
        if(cb) cb();
    })
}