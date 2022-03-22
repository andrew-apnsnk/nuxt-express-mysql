const db = require("../../database/database.js")

class UsersController {
    getAll = () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users ', (error, elements) => {
                if (error) return reject(error)
                return resolve(elements)
            })
        })
    }

    addUser = user => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users SET ?', user, (error, result) => {
                if (error) return reject(error)
                return resolve(user)
            })
        })
    }
}

module.exports = new UsersController