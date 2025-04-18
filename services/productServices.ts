import db from '../config/config-db';
import Product from '../Dto/productoDto';

export const ProductService = {
  create: async (data: Product) => {
    const [result] = await db.execute(
      'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)',
      [data.nombre, data.descripcion, data.precio, data.stock]
    );

    const insertId = (result as any).insertId;

    return {
      id: insertId,
      nombre: data.nombre,
      descripcion: data.descripcion,
      precio: data.precio,
      stock: data.stock,
    };
  },

  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM productos');
    return rows;
  },

};
