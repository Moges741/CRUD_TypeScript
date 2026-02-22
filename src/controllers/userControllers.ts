import {Response, Request} from 'express';

let  users: any[] = [];
let userId = 0;
//all users
const getUsers = (req: Request, res: Response) => {
    res.status(200).json(users);
}
// user by id
const getUserById = (req: Request, res: Response) => {
    const id = req.params.id;
    const user = users.find(u => u.userId === Number(id));
    if(user){
        res.status(200).json(user);
    }else{
        res.status(404).json({message: "User not found"});
    }
}
// create user
const createUser = (req: Request, res: Response) => {
    const {name, age, dept, phone} = req.body;
    const newUser = {
        userId: ++userId,
        name,
        age,
        dept,
        phone
    }
    users.push(newUser);
    res.status(201).json(newUser);

}
// update user
const updateUser = (req: Request, res: Response) => {
    const id = req.params.id;
    const {name, age, dept, phone} = req.body;
    const index = users.findIndex(u => u.userId === Number(id));
    if(index !== -1){
        users[index] = {
            userId: Number(id),
            name,
            age,
            dept,
            phone
        }
    res.status(200).json(users[index]);
    }else{
        res.status(404).json({message : "user not found"})
    }
}
// delete user
const deleteUser = (req: Request, res: Response) => {
    const id = req.params.id;
    const index = users.findIndex(u => u.userId === Number(id));
    if(index !== -1){
        const deletedUser = users.splice(index, 1);
        res.status(200).json(deletedUser[0]);
    }else{
        res.status(404).json({message: "User not found"});
    }
}

export {getUsers, getUserById, createUser, updateUser, deleteUser};