import request from 'supertest';
import app from '../../server';


function checkResponseStatus(response) {
    if (response.status != 200) {
        throw new Error('request unsucessful!');
    }
};

describe('GET /mainpageApi', function () {
    it('respond with json', function () {
        return request(app)
            .get('/mainpageApi')
            .expect(checkResponseStatus);
    });
});

describe('GET /otherpageApi', function () {
    it('respond with json', function () {
        return request(app)
            .get('/otherpageApi')
            .expect(checkResponseStatus);
    });
});


describe('GET /castVote', function () {
    it('respond with json', function () {
        return request(app)
            .post('/castVote')
            .send({ pageId: 'mainpage', voteCount: 1, pictureId: 0 })
            .expect({voteCount: 2});
    });
});
