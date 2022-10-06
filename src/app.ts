import express from 'express';
import ProductController from './controller/ProductController';
// import ProductController from './controller/ProductController';

const app = express();
const productController = new ProductController();

app.use(express.json());

app.get('/products', productController.getAll);
export default app;
