"use strict";

module.exports = function(sequelize,DataTypes) {
  var Sandwich = sequelize.define('Sandwiches', {
    name: {type:DataTypes.STRING, unique:true, allowNull:false},
    price:{type:DataTypes.DECIMAL, allowNull:false}
  });

  return Sandwich;
};
