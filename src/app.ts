import express from 'express';
import LoginController from './controller/LoginController';
import OrderController from './controller/OrderController';
import ProductController from './controller/ProductController';
import UserController from './controller/UserController';
import LoginMiddleware from './middlewares/LoginMiddleware';

const app = express();
const productController = new ProductController();
const orderController = new OrderController();
const userController = new UserController();
const loginController = new LoginController();
app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getOne);
app.get('/orders', orderController.getAll);

app.post('/products', productController.insertProduct);
app.post('/users', userController.insertUser);
app.post('/login', LoginMiddleware, loginController.login);

export default app;
