const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Example route (optional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'public.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
