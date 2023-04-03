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

const addUserFavorites = async (id, favorites) => {
    const user = await User.update({
      favorites: favorites,
    }, {
      where: {
        id: id,
      },
    });
    return user;
};

module.exports = { 
    createUser,
    getUserById,
    getAllUsers,
    searchUserByName,
    updateUser,
    emailUser,
    addUserFavorites,
};
