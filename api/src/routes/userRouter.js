const { Router } = require("express");
const multer = require('multer');

const {
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    updateUserHandler,
    emailUserHandler 
} = require("../handlers/usersHandlers");
const { uploadImages } = require("../utils/cloudinary");

const storage = multer.diskStorage({
    filename: function(req, file, callback) {
      callback(null, Date.now() + '-' + file.originalname);
    }
  });
  
const upload = multer({ storage: storage });

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getUserHandler);
userRouter.post("/", createUserHandler);
userRouter.post('/upload', upload.single('image'), uploadImages)
userRouter.put("/:id", updateUserHandler);
userRouter.get("/", emailUserHandler );

module.exports = userRouter;