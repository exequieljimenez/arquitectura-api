import { carritoDao } from "../daos/factory.js";

const getCarritos = async () => {
    return await carritoDao.getAll();
}

const addCarrito = async (producto) => {
    await carritoDao.guardar(producto)
    return producto;
}

const getCarritoById = async (id) => {
    const producto = await carritoDao.getById(id)
    return producto;
}

const updateCarrito = async (carrito, producto) => {
    const productoActualizado = await carritoDao.actualizar(carrito, producto);
    return productoActualizado
}

const deleteCarritoById = async (id) => {
    const productoBorrado = await carritoDao.deleteById(id);
    return productoBorrado
}

const deleteAllCarritos = async () => {
    const borrarTodo = await carritoDao.deleteAll();
    return borrarTodo
}

export { getCarritos, addCarrito, getCarritoById, updateCarrito, deleteCarritoById, deleteAllCarritos }