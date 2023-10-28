const DB = require('../../../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const method = {};

method.generate_token = (req, res) => {
    const user_id = 'UUID1234';
    const accessToken = jwt.sign({ user_id: user_id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    res.json({ accessToken });
};

method.get_all_users = (req, res) => {
    try {
        const query = `SELECT * FROM users`;

        DB.localDb.query(query, (error, results) => {
            if (error) {
                res.json({ error });
            } else {
                res.json({ results });
            }
        });
    } catch (error) {
        res.json({ error });
    }
};

method.findUser = (req, res) => {
    const id = req.params.id;
    try {
        const query = `SELECT * FROM users WHERE id = ?`;
        
        DB.localDb.query(query, [id], (error, results) => {
            if (error) {
                res.json({ error });
            } else {
                res.json({ results });
            }
        });
    } catch (error) {
        res.json({ error });
    }
};

method.find_user = (req, res) => {
    const id = req.params.id;
    try {
        const query = `SELECT * FROM users WHERE user_id = ?`;

        DB.localDb.query(query, [id], (error, results) => {
            if (error) {
                res.json({ error });
            } else {
                res.json({ results });
            }
        });
    } catch (error) {
        res.json({ error });
    }
};

method.create_user = (req, res) => {
    const salt = bcrypt.genSaltSync(10);

    try {
        const query = `INSERT INTO users (user_id, email, password, username, status) VALUES (?, ?, ?, ?, ?)`;
        const values = [
            req.body.user_id,
            req.body.email,
            bcrypt.hashSync(req.body.password, salt),
            req.body.username,
            req.body.status,
        ];

        DB.localDb.query(query, values, (error, results) => {
            if (error) {
                res.json({ error });
            } else {
                res.json({ results });
            }
        });
    } catch (error) {
        res.json({ error });
    }
};

method.update_user = (req, res) => {
    try {
        const query = `UPDATE users SET email=?, password=?, username=?, status=? WHERE user_id = ?`;
        const values = [
            req.body.email,
            bcrypt.hashSync(req.body.password, salt),
            req.body.username,
            req.body.status,
            req.body.user_id,
        ];

        DB.localDb.query(query, values, (error, results) => {
            if (error) {
                res.json({ error });
            } else {
                res.json({ results });
            }
        });
    } catch (error) {
        res.json({ error });
    }
};

method.delete_user = (req, res) => {
    const id = req.params.id;
    try {
        const query = `DELETE FROM users WHERE user_id = ?`;

        DB.localDb.query(query, [id], (error, results) => {
            if (error) {
                res.json({ error });
            } else {
                res.json({ message: 'User deleted successfully' });
            }
        });
    } catch (error) {
        res.json({ error });
    }
};

module.exports = method;
