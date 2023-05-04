import options from '../config/options.js';
import { ConnectDB } from '../config/mongoSingleton.js';
import { CarritosManagerMemory } from './manager/carritos/carritosManagerMemory.js';

let productDao;
let carritoDao;

switch (options.server.persistence) {
    case "mongo":
        const firstConnection = ConnectDB.getInstance();
        const secondConnection = ConnectDB.getInstance()
        const thirdConnection = ConnectDB.getInstance()
        const {ProductManagerMongo} = await import ("./manager/productos/productsManagerMongo.js");
        const {ProductModel} = await import ("./dbModels/product.model.js");
        productDao = new ProductManagerMongo(ProductModel);
        const {CarritosManagerMongo} = await import ('./manager/carritos/carritosManagerMongo.js');
        const {CarritoModel} = await import ('./dbModels/carrito.model.js');
        carritoDao = new CarritosManagerMongo(CarritoModel);
        break;
    case "memory":
        const {ProductsManagerMemory} =  await import ("./manager/productos/productsManagerMemory.js");
        productDao = new ProductsManagerMemory();
        const {CarritosManagerMemory} = await import ("./manager/carritos/carritosManagerMemory.js")
        carritoDao = new CarritosManagerMemory();
        break;
}

export {productDao, carritoDao}