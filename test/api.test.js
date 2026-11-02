const assert = require('node:assert/strict');
const { app } = require('../index');
const request = async (method, path, body) => {
  const server = app.listen(0);
  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}${path}`, { method, headers: { 'content-type': 'application/json' }, body: body && JSON.stringify(body) });
  server.close();
  return { status: response.status, body: await response.json() };
};

(async () => {
  const health = await request('GET', '/');
  assert.equal(health.status, 200);
  assert.equal(health.body.message, 'CRUD Komik API aktif');
  console.log('API health self-check passed');
})().catch((error) => { console.error(error); process.exitCode = 1; });
