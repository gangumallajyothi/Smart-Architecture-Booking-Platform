(async () => {
  let email = 'testhfjf' + Math.random() + '@test.com';
  let password = 'TestPassword123!';
  
  console.log('Registering...');
  try {
      let regRes = await fetch('http://13.235.24.233:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Test User', email, password, phone: '1234567890', projectType: 'House' })
      });
      let regText = await regRes.text();
      console.log('Register Res:', regRes.status, regText);
  } catch (e) {
      console.error("Reg Error:", e);
  }
  
  console.log('Logging in...');
  try {
      let loginRes = await fetch('http://13.235.24.233:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      let loginText = await loginRes.text();
      console.log('Login Res:', loginRes.status, loginText);
  } catch (e) {
      console.error("Login Error:", e);
  }
})();
