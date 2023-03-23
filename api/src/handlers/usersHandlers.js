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

    const { id } = req.params;
    const newData = req.body;

    try {
        const user = await updateUser(id, newData)
        res.json(user);    

    } catch ( error ) {
        res.status(400).json({ error: error.menssage });
    }
};

const emailUserHandler = async (req, res) => {
    const {email} = req.query;

    try{
        const results = await emailUser(email);
        res.status(200).json( results );

    } catch ( error ) {
        res.status(400).json({ error: error.menssage });
    };
}

module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    updateUserHandler,
    emailUserHandler
};