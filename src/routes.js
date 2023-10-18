const { Router } = require("express");

const productsController = require('./controllers/product-controller')

const router = Router()

/**
 * Metodos HTTP GET POST PUT PATCH e DELETE 
 */

router.get('/products', productsController.index)
router.get('/product/:id', productsController.findById)
router.post('/product', productsController.create)
router.put('/product/:id', productsController.update)
router.delete('/product/:id', productsController.delete)

module.exports = router;