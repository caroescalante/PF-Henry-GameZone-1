const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('User', {

    id: {
      type: DataTypes. UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING, 
      defaultValue: "",     
    },
    
    surname: {
      type: DataTypes.STRING,
      defaultValue: "",
      
    },

    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },

    // rol: {
    //   type: DataTypes.ENUM('admin', 'client'),
    //   defaultValue: 'admin',
    // },

    rol: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
     validate: {
      isEmail: true,
     } 
    },

    active: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: "",
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: [],
    },
  },
  { timestamps: false }
  );
};