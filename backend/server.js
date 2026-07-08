import "dotenv/config";
import app from './app.js';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
});
