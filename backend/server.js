import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authRoute from './routes/authRoute.js';


const app = express();
const port = process.env.PORT || 3301;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// // Routes
// app.post('/register', (req, res) => {
//     const { username, email, password } = req.body;

//     // Log the incoming request body
//     console.log('Register request body:', req.body);

//     // Validate incoming data
//     if (!username || !email || !password) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     const hashedPassword = bcrypt.hashSync(password, 10);

//     const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//     db.query(query, [username, email, hashedPassword], (err, result) => {
//         if (err) {
//             console.error('Error inserting user:', err);
//             res.status(500).json({ error: 'Failed to register user' });
//             return;
//         }
//         res.status(201).json({ message: 'User registered successfully' });
//     });
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     // Log the incoming request body
//     console.log('Login request body:', req.body);

//     // Validate incoming data
//     if (!email || !password) {
//         return res.status(400).json({ error: 'Email and password are required' });
//     }

//     const query = 'SELECT * FROM users WHERE email = ?';
//     db.query(query, [email], (err, results) => {
//         if (err) {
//             console.error('Error fetching user:', err);
//             res.status(500).json({ error: 'Failed to fetch user' });
//             return;
//         }

//         if (results.length === 0) {
//             res.status(401).json({ error: 'Invalid email or password' });
//             return;
//         }

//         const user = results[0];

//         const isPasswordValid = bcrypt.compareSync(password, user.password);
//         if (!isPasswordValid) {
//             res.status(401).json({ error: 'Invalid email or password' });
//             return;
//         }

//         const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', {
//             expiresIn: '1h',
//         });

//         res.status(200).json({ token });
//     });
// });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
