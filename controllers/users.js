import {v4 as uuid} from 'uuid';

let users = []

export const getUsers = (req,res)=>{
    console.log(`Users in the database :${users}`);
    res.send(users);
}

export const createUser = (req,res)=>{
    console.log('POST ROUTE REACHED');
    const user = req.body;
    
    users.push({...user,id:uuid()});

    res.send(`User with the username ${user.firstName} added to the database`)
};

export const getUser = (req,res)=>{
    const {id} = req.params;

    const findUser = users.find((user)=> user.id === id);

    res.send(findUser);
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=>user.id !== id);

    res.send(`User with the id ${id} deleted from the database`)
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;

    const findUser = users.find((user)=> user.id === id);

    if(firstName){
        findUser.firstName = firstName;
    }
    if(lastName){
        findUser.lastName = lastName;
    }
    if(age){
        findUser.age = age;
    }
    
    res.send(`User with the id ${id} updated from the database`); 
    
}




