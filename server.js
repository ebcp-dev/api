const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// API routes
const data = require('./routes/data'); // Initial data route for API
const user = require('./routes/user');
const website = require('./routes/website');
app.use('/api', data);
app.use('/api/user', user);
app.use('/api/website', website);

app.listen(port, () => console.log(`Server running on port ${port}.`));

module.exports = app;
