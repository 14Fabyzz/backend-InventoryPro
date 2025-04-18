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

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await ProductService.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductService.getById(Number(req.params.id));
    if (!product) return res.status(404).json({ message: 'No encontrado' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, precio, stock } = req.body;
    const updatedProduct = new Product(nombre, descripcion, precio, stock);
    const result = await ProductService.update(Number(req.params.id), updatedProduct);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};


  