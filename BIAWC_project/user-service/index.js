const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Endpoint health-check (ping)
app.get('/ping', (req, res) => {
    res.status(200).json({ service: 'User Service', status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});