const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Dummy database user
const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "password123";

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        res.status(200).json({ message: "Login Successful" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
