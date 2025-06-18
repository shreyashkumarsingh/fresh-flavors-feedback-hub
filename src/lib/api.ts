// Simple API utility for frontend-backend communication
export const API_BASE = 'http://localhost:4000/api';

export async function getMenu() {
  const res = await fetch(`${API_BASE}/menu`);
  if (!res.ok) throw new Error('Failed to fetch menu');
  return res.json();
}

export async function getFeedback() {
  const res = await fetch(`${API_BASE}/feedback`);
  if (!res.ok) throw new Error('Failed to fetch feedback');
  return res.json();
}

export async function submitFeedback(data: any) {
  const res = await fetch(`${API_BASE}/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to submit feedback');
  return res.json();
}

export async function submitContact(data: any) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to submit contact message');
  return res.json();
}
