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
        id: ++userId,
        name,
        age,
        dept,
        phone
    }
    users.push(newUser);
    res.status(201).json(newUser);

}
// update user
// const updateUser = (req: Request, res: Response) => {
//     const id = req.params.id;
//     const {name, age, dept, isStudent, phone} = req.body;
//     const userIndex = users.findIndex(u => u.userId === Number(id));
//     if(userIndex !== -1){
//         users[userIndex] = {
//             userId: Number(id),
//             name,
//             age,
//             dept,
//             isStudent,
//             phone
//         }
//         res.status(200).json(users[userIndex]);
//     }else{
//         res.status(404).json({message: "User not found"});
//     }
// }
// delete user
// const deleteUser = (req: Request, res: Response) => {
//     const id = req.params.id;
//     const userIndex = users.findIndex(u => u.userId === Number(id));
//     if(userIndex !== -1){
//         const deletedUser = users.splice(userIndex, 1);
//         res.status(200).json(deletedUser[0]);
//     }else{
//         res.status(404).json({message: "User not found"});
//     }
// }

export {getUsers, getUserById};