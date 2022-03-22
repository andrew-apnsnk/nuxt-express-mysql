const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/user.controller.js')

router.get('/users', async (req, res) => {
    try {
        const response = await usersController.getAll()
        return res.status(200).json(response)
    } catch (e) {
        res.sendStatus(500)
    }
})

router.post('/users', async (req, res) => {
    try {
        const response = await usersController.addUser(req.body)
        return res.status(201).json(response)
    } catch (e) {
        res.sendStatus(500)
    }
})

module.exports = router