const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const Fraud_info = sequelize.define('fraud_info', {
    type: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    appID: DataTypes.INTEGER,
    caseID: DataTypes.STRING,
    customerName: DataTypes.STRING,
    feedbackDate: DataTypes.DATE,
    invitedDate: DataTypes.DATE,
    violateError: DataTypes.STRING,
    violateTypeID: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    resultID: DataTypes.INTEGER,
    note: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    AFHandle: DataTypes.STRING,
    createdDate: DataTypes.DATE,
    updatedDate: DataTypes.DATE,
  }, {
    sequelize,
    timestamps: false,
    modelName: 'fraud_info',
    tableName: 'fraud_info'
  });
  return Fraud_info ;
};