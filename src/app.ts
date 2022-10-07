import express from 'express';
import OrderController from './controller/OrderController';
import ProductController from './controller/ProductController';

const app = express();
const productController = new ProductController();
const orderController = new OrderController();

app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getOne);
app.get('/orders', orderController.getAll);

app.post('/products', productController.insertProduct);

export default app;
