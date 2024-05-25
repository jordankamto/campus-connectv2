import bcrypt from 'bcrypt';


export const login=(req,res,next)=>{
    const { email, password } = req.body;

    // Log the incoming request body
    console.log('Login request body:', req.body);

    // Validate incoming data
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).json({ error: 'Failed to fetch user' });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }

        const user = results[0];

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ error: 'Invalid email or password' });
            return;
        }

        const token = jwt.sign({ userId: user.id, username: user.username }, 'your_jwt_secret', {
            expiresIn: '1h',
        });

        res.status(200).json({ token, username: user.username });
        console.log('User logged in successfully:', user);
    });
}

 export const registration=(req,res,next)=>{
    const { username, email, password } = req.body;

    // Log the incoming request body
    console.log('Register request body:', req.body);
    

    // Validate incoming data
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).json({ error: 'Failed to register user' });
            return;
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
}