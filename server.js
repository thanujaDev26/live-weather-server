const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;
const uri = process.env.URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // ssl: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}).catch((error) => {
    console.error('MongoDB connection error:', error.message);
});
