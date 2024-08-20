// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/ncc', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Define a schema and model for form entries
// const formSchema = new mongoose.Schema({
//     firstName: String,
//     fatherName: String,
//     lastName: String,
//     gender: String,
//     registrationID: String,
//     branch: String,
//     degree: String,
//     email: String,
//     mobile: String,
//     bloodGroup: String,
//     passingYear: Number,
//     timestamp: { type: Date, default: Date.now },
// });

// const FormEntry = mongoose.model('FormEntry', formSchema);

// // Initialize express
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Handle form submissions
// app.post('/submit-form', async (req, res) => {
//     try {
//         const formData = req.body;

//         // Check if email or registration ID already exists
//         const existingEntry = await FormEntry.findOne({
//             $or: [{ email: formData.email }, { registrationID: formData.registrationID }],
//         });

//         if (existingEntry) {
//             return res.status(400).send('Email or Registration ID already exists.');
//         }

//         // Create a new form entry
//         const newEntry = new FormEntry(formData);
//         await newEntry.save();

//         res.status(200).send('Form submission successful.');
//     } catch (error) {
//         console.error('Error saving form data:', error);
//         res.status(500).send('An error occurred while processing your request.');
//     }
// });

// // Start the server
// const PORT = 4000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ncc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const entrySchema = new mongoose.Schema({
    firstName: String,
    fatherName: String,
    lastName: String,
    registrationID: { type: String, unique: true },
    branch: String,
    degree: String,
    email: { type: String, unique: true },
    mobile: String,
    bloodGroup: String,
    passingYear: String,
    timestamp: { type: Date, default: Date.now },
});

const Entry = mongoose.model('Entry', entrySchema);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // For parsing application/json

// Route for form submission
app.post('/submit-form', async (req, res) => {
    try {
        const { registrationID, email } = req.body;

        // Check if registrationID or email already exists
        const existingEntry = await Entry.findOne({ $or: [{ registrationID }, { email }] });
        if (existingEntry) {
            return res.status(400).send('Registration ID or Email already exists.');
        }

        // Save to MongoDB
        const entry = new Entry(req.body);
        await entry.save();

        res.send('You have been registered!');
    } catch (err) {
        console.error('Error while processing form submission:', err);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});





