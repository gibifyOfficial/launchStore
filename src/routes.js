const express =  require('express');
const routes = express.Router();
const ProductController = require('./app/Controllers/ProductController');

routes.get("/", function(req, res) {
    return res.render("layout.njk");
});
routes.get("/products/create", ProductController.create);
routes.get("/products/:id/edit", ProductController.edit);

routes.post("/products", ProductController.post);
routes.put("/products", ProductController.put);
routes.delete("/products", ProductController.delete);


routes.get("/ads/create", function(req, res) {
    
});

module.exports = routes;