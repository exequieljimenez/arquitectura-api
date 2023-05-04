import express from 'express';
import options from './config/options.js';
// import connectDB from './config/dbConnection.js';
import productosRouter from './routes/routeProductos.js'
import carritosRouter from './routes/routeCarritos.js';
import {logger} from './loggers/loggers.js'

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

const port = options.server.port;
// connectDB();

app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
})