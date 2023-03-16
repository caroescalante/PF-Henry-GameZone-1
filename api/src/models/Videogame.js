const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('videogame', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL,
        validate: {
          min: 0, 
          max: 5,
        },
        allowNull: false
    },
    website: {
        type: DataTypes.STRING, 
    },
    released: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    }
  },
  {timestamps: false}
)}