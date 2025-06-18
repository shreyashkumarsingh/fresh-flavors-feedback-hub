import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// Helper to read/write JSON files
const dataPath = (file: string) => path.join(__dirname, '../data', file);

const readData = (file: string) => {
  try {
    return JSON.parse(fs.readFileSync(dataPath(file), 'utf-8'));
  } catch {
    return [];
  }
};
const writeData = (file: string, data: any) => {
  fs.writeFileSync(dataPath(file), JSON.stringify(data, null, 2));
};

// Feedback endpoints
app.get('/api/feedback', (req, res) => {
  res.json(readData('feedback.json'));
});

app.post('/api/feedback', (req, res) => {
  const feedback = readData('feedback.json');
  feedback.push({ ...req.body, date: new Date().toISOString() });
  writeData('feedback.json', feedback);
  res.status(201).json({ message: 'Feedback submitted' });
});

// Menu endpoints
app.get('/api/menu', (req, res) => {
  res.json(readData('menu.json'));
});

// Contact message endpoint
app.post('/api/contact', (req, res) => {
  const messages = readData('contact.json');
  messages.push({ ...req.body, date: new Date().toISOString() });
  writeData('contact.json', messages);
  res.status(201).json({ message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
