const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Astonishing post!',
        
        user_id: 1,

        post_id: 1
    },
    {
        comment_text: "So well articulated and informative",

        user_id: 2,

        post_id: 2
    },
    {
        comment_text: "I definitely couldn't have said it better myself.",

        user_id: 2,

        post_id: 3
    },
    {
        comment_text: "This is perfect.",

        user_id: 1,

        post_id: 3
    }]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;