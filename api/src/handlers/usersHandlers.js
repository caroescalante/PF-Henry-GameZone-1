const { 
    createUser,
    getUserById,
    getAllUsers,
    searchUserByName,
    updateUser,
    emailUser
} = require ("../controllers/userController");

const getUsersHandler = async (req, res) => {
    const { name } = req.query;

    try{
        const results = name? await searchUserByName(name) : await getAllUsers();
        res.status(200).json( results );

    } catch ( error ) {
        res.status(400).json({ error: error.menssage });  
    };
};

const getUserHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await getUserById(id);
        res.status(200).json(user);

    } catch ( error ) {
        res.status(400).json({ error: error.menssage });
    }
};

const createUserHandler = async (req,res) => {
    const {name, surname, phone, password, email } = req.body;

    try {
        if(!email || !password) throw Error("This information is required");    
        const newUser = await createUser(name, surname, phone, password, email);

       
        res.status(200).json({ data:newUser });      

    } catch ( error ) {
        res.status(400).json({ error: error.menssage });
    };
};

const updateUserHandler = async (req, res) => {

    const { email } = req.params;
    const newData = req.body;

    try {
      if(email){
        const emailExists = await emailUser(email);
        if (emailExists === true) {
          const user = await createUser(newData);
          res.status(201).json({ message: 'User created', user });
        } else {
          const [rowsAffected, [updatedUser]] = await updateUser(email, newData);
          if (rowsAffected === 0) {
            res.status(404).json({ error: 'User not found' });
          } else {
            res.status(200).json(updatedUser);
          }
        }
      }else{
        const newUser = await createUser(newData);
        res.status(200).json(newUser)
      }
        
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
};

const emailUserHandler = async (req, res) => {
    const { email } = req.params;
    console.log(email);
  console.log('entre')
  try {
    const dataBaseEmail = await emailUser(email)
    res.status(200).json(dataBaseEmail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
    };


module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    updateUserHandler,
    emailUserHandler,
};