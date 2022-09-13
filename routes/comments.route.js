const { Router } = require('express')
const router = Router()
const { commentsController } = require('../controllers/commnets.controller')

router.post('/comment', commentsController.createComment)
router.get('/comment', commentsController.getAllComment)
router.patch('/comment', commentsController.updateComment)
router.delete('/comment', commentsController.deleteComment)

module.exports = router