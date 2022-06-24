const { Router } = require('express')
const router = Router()
const { getProductos, postProductos } = require('../controllers/productosController')

router.get('/productos', getProductos)
router.post('/productos', postProductos)

module.exports = router
