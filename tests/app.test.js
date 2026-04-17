const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  it('should return 200 OK and status UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
    expect(res.body).toHaveProperty('timestamp');
  });
});

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
