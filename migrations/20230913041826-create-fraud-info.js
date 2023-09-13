'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fraud_info', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER
      },
      projectID: {
        type: Sequelize.INTEGER
      },
      appID: {
        type: Sequelize.INTEGER
      },
      caseID: {
        type: Sequelize.STRING
      },
      customerName: {
        type: Sequelize.STRING
      },
      feedbackDate: {
        type: Sequelize.DATE
      },
      invitedDate: {
        type: Sequelize.DATE
      },
      violateError: {
        type: Sequelize.STRING
      },
      violateTypeID: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      resultID: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT
      },
      AFHandle: {
        type: Sequelize.STRING
      },
      createdDate: {
        type: Sequelize.DATE
      },
      updatedDate: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fraud_info');
  }
};