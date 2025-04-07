const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

require('dotenv').config();  // Load .env file
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

client.messages
  .create({
     body: 'Hello from Node.js!',
     from: '+16199010594', // Your Twilio number
     to: '+2347079500832'    // Your number
   })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err));
