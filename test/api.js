process.env.NODE_ENV = 'test';

const mongojs = require('mongojs');
const db = mongojs('mongodb://dbadmin:admin123@ds163613.mlab.com:63613/wordapi', ['list']);
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let wordapi = require('../server/models/wordapi.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Wordapi mongodb API', () => {
    beforeEach((done) => {
        done();
    });

    it('should remove temporary object', (done) => {
        db.list.remove({ _id: "bar:synonyms" }, (err) => {
            should.not.exist(err);
            done();
        })
    })

    it('should add new synonyms object', (done) => {
        let obj = {
            _id: 'bar:synonyms',
            word: 'bar',
            synonyms: [
                'browning automatic rifle',
                'legal community',
                'legal profession',
                'debar',
                'exclude',
                'barricade',
                'block',
                'block off',
                'block up',
                'blockade',
                'stop',
                'prevention',
                'cake',
                'banish',
                'relegate',
                'measure',
                'streak',
                'stripe',
                'barroom',
                'ginmill',
                'saloon',
                'taproom'
            ]
        }
        wordapi.save(obj, (err, res) => {
            should.not.exist(err);
            done();

        })
    });
    it('should get synonyms object from mongodb', (done) => {
        wordapi.get('bar:synonyms', (err, data) => {
            should.not.exist(err);
            should.exist(data);
            done();
        })
    })
})

describe('Wordapi /GET synonyms', () => {
    it(`it should GET all for ward 'too'`, (done) => {
        chai.request(server)
            .get('/api/v1/wordapi/too/synonyms')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.synonyms.should.be.a('array');
                done();
            });
    });
});
