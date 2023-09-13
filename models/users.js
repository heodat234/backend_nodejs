const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const Users = sequelize.define('users', {
    fullName: DataTypes.STRING,
    fullNameAncii: DataTypes.STRING,
    mobilePhone: DataTypes.STRING,
    sex: DataTypes.STRING,
    dob: DataTypes.DATE,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    idNumber: DataTypes.STRING,
    money: DataTypes.FLOAT,
    point: DataTypes.FLOAT,
    status: DataTypes.STRING,
    rsmUserID: DataTypes.INTEGER,
    userReferral: DataTypes.INTEGER,
    avatarImage: DataTypes.STRING,
    wc_code: DataTypes.STRING,
    platform: DataTypes.STRING,
    tax_number: DataTypes.STRING,
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'users',
    tableName: 'users'
  });
  return Users ;
};