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
      defaultValue:false,     
    },
    
    surname: {
      type: DataTypes.STRING,
      defaultValue: "vacio",
      
    },

    phone: {
      type: DataTypes.STRING,
      defaultValue: "vacio",
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
    },

    active: {
      type:DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },
  { timestamps: false }
  );
};