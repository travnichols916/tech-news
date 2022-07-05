const sequelize = require('../config/connection');
const { User, Post } = require('../models');
const userData = [
    {
        email: 'CodersSquad@email.com',
        
        password: 'password123'
    },
    {
        email: 'DevonTheDeveloper@email.com',

        password: '12345678'
    },
    {
        email: 'Travster@email.com',

        password: '12pw34'
    }
]
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
