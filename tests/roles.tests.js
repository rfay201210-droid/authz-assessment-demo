// Pseudo-code: use supertest + jest
test('User cannot access admin route', async () => {
  const token = await loginAs('user@example.com', 'pass123');
  const res = await request(app).get('/api/admin/data').set('Authorization', `Bearer ${token}`);
  expect(res.status).toBe(403);
});
