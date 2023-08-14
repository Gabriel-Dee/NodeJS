const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../../Users')

// get users from JSON
router.get('/', (req, res) => {
    res.json(users)
})

// get users by id from Json
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.sendStatus(400)
    }
})

// Create new user
router.post('/', (req,res) => {
    const requiredFields = ['name', 'email', 'address', 'phone', 'website', 'company'];

    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        company: req.body.company,
    };

        
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).send(`Missing ${field} field`);
        }
    }

    users.push(newUser)
    res.json(users)
})

module.exports = router;