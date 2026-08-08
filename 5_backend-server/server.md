# Express.js Basics

## Create Project
```bash
npm init -y
npm install express
```

## server.js
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## What I Learned
- Express is a Node.js framework.
- `app.get()` creates a GET route.
- `req` is the request object.
- `res` is the response object.
- `app.listen()` starts the server.