const { 
  createUser,
  getUserById,
  getAllUsers,
  searchUserByName,
  updateUser,
  emailUser,
  addUserFavorites,
  toggleActiveUser
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
  const {name, image, surname, email, phone} = req.body;
console.log(name, image, surname, phone);
  try {
      if(!email) throw Error("This information is required");    
      const newUser = await createUser({name, image, surname, email, phone});
      res.status(200).json({ data:newUser });      
  } catch ( error ) {
      res.status(400).json({ error: error.menssage });
  };
};

//no tocar*****"leonardo" */

const updateUserHandler = async (req, res) => {

    const { id } = req.params;
    const newData = req.body

    try {
        const user = await updateUser(id, newData)
        res.json(user);
      
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
//************ */

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

const favoriteUserHandler = async (req, res) => {
  const { email } = req.params;
  const { favorites } = req.body;

  try {
    const addFavorites = await addUserFavorites(email, favorites);
    return res.status(200).json(addFavorites);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  };
};


const toggleActiveHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await toggleActiveUser(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getUsersHandler,
  getUserHandler,
  createUserHandler,
  updateUserHandler,
  emailUserHandler,
  favoriteUserHandler,
  toggleActiveHandler
};


//const updateUserHandler = async (req, res) => {

  //   const { email } = req.params;
  //   const {name, surname, phone, image} = req.body
  //   console.log(name, surname, phone, image);
  //   try {
  //       const emailExists = await emailUser(email);
  //       if (emailExists === true) {
  //         const user = await createUser({name, surname, phone, image, email});
  //         res.status(201).json({ message: 'User created', user });
  //       } else {
  //         const [rowsAffected, [updatedUser]] = await updateUser({name, image, surname, email, phone});
  //         if (rowsAffected === 0) {
  //           res.status(404).json({ error: 'User not found' });
  //         } else {
  //           res.status(200).json(updatedUser);
  //         }
  //       }
        
  //     } catch (error) {
  //       res.status(400).json({ error: error.message });
  //     }
  // };
