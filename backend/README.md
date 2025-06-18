# Restaurant Feedback & Menu Backend

This is a simple Node.js (Express) backend written in TypeScript for handling feedback, menu, and contact messages for a restaurant app.

## Features
- Submit and retrieve feedback
- Retrieve menu items
- Submit contact messages
- Data stored in JSON files (no database required)

## Endpoints
- `GET /api/feedback` — List all feedback
- `POST /api/feedback` — Submit new feedback
- `GET /api/menu` — List menu items
- `POST /api/contact` — Submit a contact message

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run in development mode:**
   ```sh
   npx nodemon src/index.ts
   ```
3. **Or run directly with ts-node:**
   ```sh
   npx ts-node src/index.ts
   ```

The server will start on [http://localhost:4000](http://localhost:4000) by default.

## Project Structure
- `src/` — TypeScript source code
- `data/` — JSON files for feedback, menu, and contact messages

---
This backend is designed for demo and prototyping purposes. For production, consider using a real database and adding authentication.
