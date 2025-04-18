import { Request, Response } from 'express';
import UserService from '../services/UserServices';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserService.getUserById(Number(id));
        if (user.length > 0) {
            res.json(user[0]);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};


