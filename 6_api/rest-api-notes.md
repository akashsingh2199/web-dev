# REST API Notes

## Create Project
```bash
npm init -y
npm install express
```

## Run Server
```bash
node server.js
```

For auto restart after file changes:
```bash
npx nodemon server.js
```

## server.js
```javascript
const app = require('./src/app');

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
```

## src/app.js
```javascript
const express = require('express');
const app = express();

const notes = [];

app.use(express.json());

app.post('/notes', (req, res) => {
  notes.push(req.body);
  res.status(201).json({ message: 'Note created successfully' });
});

app.get('/notes', (req, res) => {
  res.status(200).json({
    notes: notes,
    message: 'Notes fetched successfully'
  });
});

app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  delete notes[id];
  res.status(200).json({ message: 'Note deleted successfully' });
});

app.patch('/notes/:id', (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  notes[id].description = description;
  res.status(200).json({ message: 'Note updated successfully' });
});

module.exports = app;
```

## What Is REST API?
- REST API is used to send and receive data between frontend and backend.
- API returns data mostly in JSON format.
- Every route has an HTTP method like `GET`, `POST`, `PATCH`, or `DELETE`.
- One URL can do different work with different methods.

## HTTP Methods
- `GET` is used to fetch data.
- `POST` is used to create new data.
- `PATCH` is used to update existing data.
- `DELETE` is used to delete data.

## API Routes

### Create Note
```http
POST /notes
```

Body:
```json
{
  "title": "First note",
  "description": "Learn REST API"
}
```

Response status:
```text
201 Created
```

### Get Notes
```http
GET /notes
```

Response:
```json
{
  "notes": [],
  "message": "Notes fetched successfully"
}
```

### Delete Note
```http
DELETE /notes/0
```

Here `0` is the note id from the array index.

### Update Note
```http
PATCH /notes/0
```

Body:
```json
{
  "description": "Updated note description"
}
```

## Important Express Concepts
- `express.json()` reads JSON data from request body.
- `req.body` gives data sent by client.
- `req.params` gives dynamic route values.
- `res.status()` sets HTTP status code.
- `res.json()` sends JSON response.
- `module.exports = app` exports app so `server.js` can use it.

## Status Codes
- `200` means request successful.
- `201` means new data created.
- `400` means bad request.
- `404` means route or data not found.
- `500` means server error.

## What I Learned
- REST API uses routes and HTTP methods.
- `POST /notes` creates a note.
- `GET /notes` fetches all notes.
- `PATCH /notes/:id` updates one note.
- `DELETE /notes/:id` deletes one note.
- Data is stored in the `notes` array for now.
