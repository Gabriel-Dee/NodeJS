const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../../Users')

// get users
router.get('/', (req, res) => {
    res.json(users)
})

// get users by id
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

// Update User
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found) {
        const updateUser = req.body
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name
                user.email = updateUser.email ? updateUser.email : user.email
                res.json({msg: 'User Updated!', user})
            }
        })
    } else {
        res.sendStatus(400)
    }
})

// Delete User
router.delete('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found) {
        users = users.filter((user) => user.id !== parseInt(req.params.id))
        res.json({msg: 'Deleted!', users})
    } else {
        res.sendStatus(400)
    }
})
module.exports = router;