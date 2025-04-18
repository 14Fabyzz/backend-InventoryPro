import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import generateHash from '../Helpers/generateHash';
import Auth from '../Dto/AuthDto';


class UserService {
    
    static async register(user: User) {
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }

    static async getAllUsers() {
        return await UserRepository.getAllUsers();
    }

    static async getUserById(id: number) {
        return await UserRepository.getUserById(id);
    }

    static async updateUser(id: number, user: User) {
        return await UserRepository.updateUser(id, user);
    }

    static async deleteUser(id: number) {
        return await UserRepository.deleteUser(id);
    }

    static async getUserByEmail(email: string) {
        return await UserRepository.getUserByEmail(email);
    }
}

export default UserService;