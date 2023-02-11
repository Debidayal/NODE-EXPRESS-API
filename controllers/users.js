
import UserData from '../model/user.js';


const users = [];

export const  getUsers = async (req,res) => {

    try{

        const users = await UserData.find({}).sort({"age":1});

        res.send(users);

    }catch(e){

         res.status(400).send(e);

    }
   
    
};

export const createUser = async (req,res) =>{
    try{
        // users.push({...user , id: uuidv4()})
        const  user = new UserData(req.body);

        const userAdded = await user.save();

        res.status(201).send(userAdded);

    }catch(e){

        res.status(400).send(e);

    }
  
};

export const  getUserByID = async (req,res) => {

    //const {Id} = req.params;
  
    //const user = users.find((user) => user.id === Id);
    try{

        const user = await UserData.findById(req.params.Id);

        res.send(user);

    }catch(e){

         res.status(400).send(e);

    }
   
    
    res.send(user);
    
};

export const  deleteUser = (req,res) => {

    const {Id} = req.params;
  
    const user = users.filter((user) => user.id !== Id);
  
    res.send(`User deleted for ID:${Id}`);
    
};

export const  updateUser = async (req,res) => {

    // const { Id } = req.params;
  
    // const user = users.find((user) => user.id === Id);
  
    // const { firstName , lastName , age } = req.body;
  
    // if(firstName) user.firstName = firstName
    
    // if(lastName)  user.lastName = lastName
    
    // if(age) user.age = age

    try{

        const user = await UserData.findByIdAndUpdate(req.params.Id, req.body, {new:true});

        res.send(user);

    }catch(e){

         res.status(500).send(e);

    }

  
    res.send(`User deleted for ID:${Id}`);
    
  };



