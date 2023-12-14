const ProductController = require('../controllers/product.controller');  
module.exports = (app) => {
    app.get('/api/', ProductController.index);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/edit/:id', ProductController.updateProduct);
    app.post('/api/product', ProductController.createProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteProduct);
}