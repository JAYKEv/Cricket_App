// app/coach-home/types.ts
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description?: string;
  type: 'session' | 'match' | 'workshop' | 'meeting';
}

// Export other interfaces if needed
export interface Student {
  // ... student properties
}

export interface Video {
  // ... video properties
}