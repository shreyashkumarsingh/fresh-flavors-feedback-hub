import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// File system paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FEEDBACK_FILE = path.join(__dirname, 'data', 'feedback.json');

// Load and save feedbacks to file
function loadFeedbacks() {
  try {
    const data = fs.readFileSync(FEEDBACK_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}
function saveFeedbacks(feedbacks) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(feedbacks, null, 2));
}

// In-memory storage
let feedbacks = loadFeedbacks();
let orders = [];

const menu = [
  {
    id: '1',
    name: 'Samosa Chaat',
    description: 'Crispy samosas topped with spiced chickpeas and chutneys',
    price: 180,
    category: 'appetizers',
    image: '',
    isVegetarian: true
  },
  // Add more menu items as needed
];

// Feedback endpoints
app.get('/api/feedback', (req, res) => {
  res.json(feedbacks);
});

app.post('/api/feedback', (req, res) => {
  const feedback = { ...req.body, id: Date.now().toString(), date: new Date().toISOString() };
  feedbacks.push(feedback);
  saveFeedbacks(feedbacks);
  res.status(201).json(feedback);
});

// Orders endpoints
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const order = { ...req.body, id: Date.now().toString(), date: new Date().toISOString() };
  orders.push(order);
  res.status(201).json(order);
});

// Menu endpoint
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
