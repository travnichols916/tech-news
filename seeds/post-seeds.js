const { Post } = require('../models');

const postData = [
    {
        title: 'Why MVC is so important',
        
        post_content: 'MVC allows developers to maintain a true seperation of concerns, devising their code between the model layer for data, the View layer for design, and the Controller layer for application logic',

        user_id: 1
    },
    {
        title: 'Authorization vs Aunthentication',

        post_content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, where as authorization means being allowed access to the system. This',
        
        user_id: 1
    },
    {
        title: 'Object-Relational Mapping',

        post_content: 'I have really loved learning about ORMs. It has really simplified the way I create queries in SQL!',

        user_id: 1
    }]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;