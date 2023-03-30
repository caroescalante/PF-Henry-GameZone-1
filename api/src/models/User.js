const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('User', {

    id: {
      type: DataTypes. UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING, 
      defaultValue: '',     
    },
    
    surname: {
      type: DataTypes.STRING,
      defaultValue: "",
      
    },

    phone: {
      type: DataTypes.STRING,
      defaultValue: '',
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:""
    },

    rol: {
      type: DataTypes.ENUM('admin', 'client'),
      defaultValue: 'client',
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: ''
    },

    active: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: "",
    }
  },
  { timestamps: false }
  );
};