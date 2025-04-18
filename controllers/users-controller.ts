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