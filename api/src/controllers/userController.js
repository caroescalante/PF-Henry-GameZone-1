const { User } = require ("../db")

const createUser = async (
    name, surname, phone, password, email,  ) => {

    const newUser = await User.create({name, surname, phone, password, email});

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

    return database
};
    
const searchUserByName = async (name) => {

    const dataBaseName = await User.findAll({where: { name: name.trim().toLowerCase()}});

    return dataBaseName;
};

const updateUser = async (id, newData) => {

    const [rowsAffected, [updateUser]] = await User.update(newData,{
        where: {
            id: id,
        },
        returning: true,
    });

    if ( rowsAffected === 0) {
        return res.status(404).json({ error: "User not found" });
    }

    return updateUser;
}

const emailUser = async (email) => {

    const dataBaseEmail = await User.findAll({where: { email: email.trim().toLowerCase()}});

    return dataBaseEmail;
};

module.exports = { 
    createUser,
    getUserById,
    getAllUsers,
    searchUserByName,
    updateUser,
    emailUser
};