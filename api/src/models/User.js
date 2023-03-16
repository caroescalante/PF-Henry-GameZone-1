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
    },
    
    surname: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { timestamps: false }
  );
};