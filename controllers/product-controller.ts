import { Request, Response } from 'express';
import { ProductService } from '../services/productServices';
import Product from '../Dto/productoDto';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;

    if (!nombre || !descripcion || !precio || !stock) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const newProduct = new Product(nombre, descripcion, precio, stock);
    const result = await ProductService.create(newProduct);

    return res.status(201).json(result); // ← return aquí para asegurar que no continúa
  } catch (error) {
    console.error("Error al crear producto:", error);
    return res.status(500).json({ message: 'Error al crear el producto', error });
  }
};


  