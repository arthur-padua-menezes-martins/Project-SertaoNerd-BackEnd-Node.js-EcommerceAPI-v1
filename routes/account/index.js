

/*BASIC MODULES*/
const router = require('express').Router()

/*AUTHENTICATION MODULES*/
const usersController = require('../../controllers/users/index.js'); const userController = new usersController()
const sessionsController = require('../../controllers/session/index.js'); const sessionController = new sessionsController()





router.get( '/', userController.index )


router.get( '/logout', sessionController.logout )


router.get( '/update', ( request, response ) => { response.render('account/update', { errors : null, success : null, token : null } ) } )
router.post( '/update', userController.update, sessionController.update )


router.get( '/delete', userController.delete, sessionController.logout )


router.get( '/comments', userController.comments )


/*EXPORTS USER ROUTES*/
/**********************************************************************************************************************************/
module.exports = router