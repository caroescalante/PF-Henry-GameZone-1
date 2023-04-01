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

const createUser = async ({name, image, surname, email, password, phone}) => {
    // const dbName = await User.findOne({
    //   where: { name: name.trim().toLowerCase() },
    // });
    // const dbImage = await User.findOne({
    //   where: { image: image.trim().toLowerCase() },
    // });
    // const dbSurname = await User.findOne({
    //   where: { surname: surname.trim().toLowerCase() },
    // });
    // const dbPassword = await User.findOne({
    //   where: { password: password.trim().toLowerCase() },
    // });
    // const dbPhone = await User.findOne({
    //   where: { phone: phone.trim().toLowerCase() },
    // });

    // let nameF = name;
    // let imageF = image;
    // let surnameF = surname;
    // let passwordF = password;
    // let phoneF = phone;

    // if(dbName) { nameF = dbName}
    // if(dbImage) {imageF = dbImage}
    // if(dbSurname) {surnameF = dbSurname}
    // if(dbPassword) {passwordF = dbPassword}
    // if(dbPhone) {phoneF = dbPhone}

    // console.log(nameF);
    // console.log(imageF);
    // console.log(surnameF);
    // console.log(passwordF);
    // console.log(phoneF);

    const newUser = await User.create({name, image, surname, email, password, phone});
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

const updateUser = async ({name, image, surname, email, password, phone}) => {
    const [rowsAffected, [updatedUser]] = await User.update({name, image, surname, password, phone}, {
      where: {
        email: email,
      },
      returning: true,
    });
    return [rowsAffected, updatedUser];
  };
  
  const emailUser = async (email) => {
    const dataBaseEmail = await User.findOne({
      where: { email: email.trim().toLowerCase() },
    });
    if (!dataBaseEmail) return true;
    else return dataBaseEmail;
  };

  
 const disabledUser = async (id) => {
  const [rowsAffected, [updatedUser]] = await User.update(
    { active: false },
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
    disabledUser
};