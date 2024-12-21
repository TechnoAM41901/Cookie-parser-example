const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const storageRoutes = require('./routes/storageRoutes');

const app = express();
const port = 3000;

// Use cookie-parser middleware
app.use(cookieParser());

// Use body-parser middleware to handle JSON requests
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Use storage routes
app.use('/api', storageRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
