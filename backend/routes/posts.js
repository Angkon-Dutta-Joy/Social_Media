const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    const posts = [
        { id: 1, userName: "john_doe", caption: "Enjoying the sunshine!" },
        { id: 2, userName: "jane_smith", caption: "Loving this new app!" }
        // Ensure all posts include both userName and caption
    ];
    res.json(posts);
});

module.exports = router;
