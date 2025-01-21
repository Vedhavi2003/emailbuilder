const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const emailRoutes = require('./routes/emailRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/emailbuilder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/emails', emailRoutes);
app.use('/api/uploads', uploadRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

