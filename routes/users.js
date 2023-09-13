var express = require('express');
const { body } = require('express-validator');
const user360Controller = require('../controllers/user360Controller');

var router = express.Router();

/* GET users listing. */
router.get('/', user360Controller.getUser);

// router.get('/:id/', user360Controller.getUserByID);

router.get('/fraud/', user360Controller.getFraudByID);

router.post('/fraud/', [
  body('type').exists().notEmpty().withMessage('Trường "type" là bắt buộc'),
  body('userID').exists().notEmpty().withMessage('Trường "userID" là bắt buộc'),
], user360Controller.createFraud);

router.put('/fraud/update/', [
  body('id').exists().notEmpty().withMessage('Trường "id" là bắt buộc'),
], user360Controller.updateFraud);

// router.delete('/delete/:id/', (req, res) => {
//   user360.delete_user(req.params.id, res);
// });

module.exports = router;
