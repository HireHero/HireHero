// any additional settings for using typescript?
const userApi = require('../userApi.ts');
const supertest = require('supertest');
const requestWithSupertest = supertest(userApi);

describe('User Endpoints', () => {
  it('POST / should return ', async () => {
    const res = await requestWithSupertest.post('/');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
    // check this line
    expect(res.body).toHaveProperty('user');
  });

  it('GET /user/:id should show a user', async () => {
    const res = await requestWithSupertest.get('/users/3');
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('user3');
  });
});
