import express from 'express';
import LoginController from './controller/LoginController';
import OrderController from './controller/OrderController';
import ProductController from './controller/ProductController';
import UserController from './controller/UserController';
import LoginMiddleware from './middlewares/LoginMiddleware';
import validateOrderMiddleware from './middlewares/validateOrderMiddleware';
import validateProductMiddleware from './middlewares/validateProductMiddleware';
import validateToken from './middlewares/validateToken';
import ValidateUserMiddleware from './middlewares/ValidateUserMiddleware';

const app = express();
const productController = new ProductController();
const orderController = new OrderController();
const userController = new UserController();
const loginController = new LoginController();
app.use(express.json());

app.get('/products', productController.getAll);
app.get('/products/:id', productController.getOne);
app.get('/orders', orderController.getAll);

app.post('/products', validateProductMiddleware, productController.insertProduct);
app.post('/users', ValidateUserMiddleware, userController.insertUser);
app.post('/login', LoginMiddleware, loginController.login);
app.put('/orders', validateToken, validateOrderMiddleware, orderController.addOrder);

export default app;
