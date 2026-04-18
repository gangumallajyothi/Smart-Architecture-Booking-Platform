const http = require('http');
const data = JSON.stringify({
  name: 'TestUser',
  email: 'newtest789@test.com',
  password: 'Test1234',
  phone: '9876543210',
  projectType: 'home'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/register',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    console.log('BODY:', body);
  });
});

req.on('error', (e) => console.error('ERROR:', e.message));
req.write(data);
req.end();
