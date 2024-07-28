const express = require('express');
const router = express.Router();
const {
    getSuggestions,
    createRoute,
    getRoute,
    updateRoute,
    deleteRoute,
    likeRoute,
    commentOnRoute,
    getFollowedRoutes,
    getGeneralRoutes,
    getComments // Ensure this is correctly defined and imported
} = require('../controllers/routeController');
const verifyJWT = require('../middleware/verifyJWT');

// Route definitions
router.get('/suggestions', verifyJWT, getSuggestions);
router.get('/', getGeneralRoutes); // Public
router.post('/', verifyJWT, createRoute);
router.get('/:id', getRoute); // Public
router.put('/:id', verifyJWT, updateRoute);
router.delete('/:id', verifyJWT, deleteRoute);
router.put('/like/:id', verifyJWT, likeRoute);
router.post('/:id/comment', verifyJWT, commentOnRoute); // Adjust the endpoint as needed
router.get('/:id/comments', getComments); // Adjust the endpoint as needed
router.get('/followed/:userId', verifyJWT, getFollowedRoutes);


module.exports = router;
