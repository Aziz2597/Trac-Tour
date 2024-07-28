const express = require('express')
const router = express.Router()
const {
	registerUser,
	getUserProfile,
	updateUserProfile,
	followUser,
	unfollowUser,
	getFollowers,
	getFollowing,
	secureProfile,
	getCurrentUser,
	getUserRoutes,
	updateUserPassword,
} = require('../controllers/userController')
const verifyJWT = require('../middleware/verifyJWT')

router.post('/register', registerUser)
router.get('/profile/:id', getUserProfile) // Public
router.put('/profile', verifyJWT, updateUserProfile)
router.put('/follow/:id', verifyJWT, followUser)
router.put('/unfollow/:id', verifyJWT, unfollowUser)
router.get('/followers/:id', getFollowers) // Public
router.get('/following/:id', getFollowing) // Public
router.put('/secure', verifyJWT, secureProfile)
router.get('/current', verifyJWT, getCurrentUser)
router.get('/:id/routes', getUserRoutes) // Public
router.put('/profile/password', verifyJWT, updateUserPassword)

module.exports = router
