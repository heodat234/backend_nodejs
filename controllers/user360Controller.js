// const User360 = require("../models/user360.js.tmp");
const db = require("../models/index");
// const { QueryTypes } = require("sequelize");

// const { validationResult } = require("express-validator");
const Fraud_info = db.fraud_info;
const Users = db.users;
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

exports.getUserByID = (req, res) => {
  const userId = req.params.id;
  // Kiểm tra xem tham số "id" có tồn tại hay không
  if (!userId) {
    return res.status(400).json({ error: 'Tham số "id" là bắt buộc' });
  }
  Users.findByPk(userId)
    .then((user) => {
      res.send({ status: true, data: user });
    })
    .catch((error) => {
      res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
    });
};

exports.getUser = (req, res) => {
  const userId = req.query.id; // Truy cập tham số kiểu GET có tên "id"

  // Kiểm tra xem tham số "id" có tồn tại hay không
  if (!userId) {
    return res.status(400).json({ error: 'Tham số "id" là bắt buộc' });
  }

  // Định nghĩa raw query
  const rawQuery = `
    SELECT u.*, ul.referralCode
    FROM users AS u
    LEFT JOIN user_login ul ON u.ID = ul.userID
    WHERE u.ID = :userId
    GROUP BY u.ID
  `;

  // Thực hiện raw query
  sequelize
    .query(rawQuery, {
      replacements: { userId: userId }, // Thay thế :userId bằng giá trị 1
      type: Sequelize.QueryTypes.SELECT, // Loại query (SELECT)
      // model: User, // Mô hình sẽ được sử dụng cho kết quả
      // mapToModel: true, // Ánh xạ kết quả vào mô hình
    })
    .then((user) => {
      res.send({ status: user.length ? true : false, data: user.length ? user[0] : user });
    })
    .catch((error) => {
      res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
    });
};

exports.getFrauds = (req, res) => {
  const params = req.query;
  // const userId = req.query.id; // Truy cập tham số kiểu GET có tên "id"

  // // Kiểm tra xem tham số "id" có tồn tại hay không
  // if (!userId) {
  //   return res.status(400).json({ error: 'Tham số "id" là bắt buộc' });
  // }
  Fraud_info.findAll()
    .then((frauds) => {
      res.send({ status: true, data: frauds });
    })
    .catch((error) => {
      res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
    });
};

exports.getFraudByID = (req, res) => {
  const fraudId = req.params.id;
  // Kiểm tra xem tham số "id" có tồn tại hay không
  if (!fraudId) {
    return res.status(400).json({ error: 'Tham số "id" là bắt buộc' });
  }
  Fraud_info.findByPk(fraudId)
    .then((fraud) => {
      res.send({ status: true, data: fraud });
    })
    .catch((error) => {
      res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
    });
};
