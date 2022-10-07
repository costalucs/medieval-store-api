import express from 'express';
import OrderController from './controller/OrderController';
import ProductController from './controller/ProductController';
import UserController from './controller/UserController';

const app = express();
const productController = new ProductController();
const orderController = new OrderController();
const userController = new UserController();
app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getOne);
app.get('/orders', orderController.getAll);

app.post('/products', productController.insertProduct);
app.post('/users', userController.insertUser);

export default app;
