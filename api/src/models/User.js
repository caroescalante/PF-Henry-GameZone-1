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
      defaultValue: 'empty',     
    },
    
    surname: {
      type: DataTypes.STRING,
      defaultValue: "empty",
      
    },

    phone: {
      type: DataTypes.STRING,
      defaultValue: 'empty',
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rol: {
      type: DataTypes.ENUM('admin', 'client'),
      defaultValue: 'client',
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: 'empty'
    },

    active: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: "vacio",
    }
  },
  { timestamps: false }
  );
};