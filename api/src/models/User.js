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

    rol: {
      type: DataTypes.ENUM('Admin', 'Client'),
      defaultValue: 'Client',
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
    }
  },
  { timestamps: false }
  );
};