const { User } = require ("../db")

const createUser = async ({name, image, surname, email, phone}) => {
    const newUser = await User.create({name, image, surname, email, phone});
    return newUser;
  };

const getUserById = async (id) => {
    if(id) {
        const databaseUser = await User.findByPk(id);

        return [databaseUser];
    };    
};

const getAllUsers = async () => {
    
    const database = await User.findAll();

    return database;
};
    
const searchUserByName = async (name) => {

    const dataBaseName = await User.findAll({where: { name: name.trim().toLowerCase()}});

    return dataBaseName;
};

//***no tocar "leonardo" */
const updateUser = async (id, newData) => {
    const [rowsAffected, [updatedUser]] = await User.update(newData, {
      where: {
        id: id,
      },
      returning: true,
    });
    if ( rowsAffected === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return updatedUser
};
//***************** */
  
const emailUser = async (email) => {
    const dataBaseEmail = await User.findOne({
      where: { email: email.trim().toLowerCase() },
    });
    if (!dataBaseEmail) return true;
    else return dataBaseEmail;
};

const addUserFavorites = async (email, favorites) => {
    await User.update({
      favorites: favorites,
    }, {
      where: {
        email: email,
      },
    });
    const user = await User.findOne({
      where: { email: email },
    });
    return user;
};

const toggleActiveUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error(`User with ID ${id} not found`);
  }
  const [rowsAffected, [updatedUser]] = await User.update(
    { active: !user.active },
    { where: { id }, returning: true }
  );
  if (rowsAffected !== 1) {
    throw new Error(`User with ID ${id} not found`);
  }
  return updatedUser;
};



module.exports = { 
    createUser,
    getUserById,
    getAllUsers,
    searchUserByName,
    updateUser,
    emailUser,
    addUserFavorites,
    toggleActiveUser
};

// const updateUser = async ({name, image, surname, email, phone}) => {
//   const [rowsAffected, [updatedUser]] = await User.update({name, image, surname, phone}, {
//     where: {
//       email: email,
//     },
//     returning: true,
//   });
//   return [rowsAffected, updatedUser];
// };
