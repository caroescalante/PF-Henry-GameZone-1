const { User } = require ("../db")

// const useradmin = [
// 	{
// 		"id": "1ff21acc-e2ef-4b89-a07c-6a38ba97fdb5",
// 		"name": "leonardo",
// 		"surname": "tobar",
// 		"image": "https://digimon.shadowsmith.com/img/gatomon.jpg",
// 		"phone": "3165119136",
// 		"password": "1111",
// 		"rol": "admin",
// 		"email": "leo.19-20@hotmail.com",
// 		"active": true
// 	}
// ];

const createUser = async (
    name, surname, image, phone, password, email ) => {

    const newUser = await User.create({name, surname, image, phone, password, email});

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