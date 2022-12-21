// check that this links to the correct file
const server = require('../server.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('User Endpoints', () => {
  it('GET /user should show all users', async () => {
    const res = await requestWithSupertest.get('/users');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    expect(res.body).toHaveProperty('users');
  });

  it('GET /user/:id should show a user', async () => {
    const res = await requestWithSupertest.get('/users/3');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('user3');
  });
});
