var express = require('express');
const user360Controller = require('../controllers/user360Controller');

var router = express.Router();

/* GET users listing. */
router.get('/', user360Controller.getUser);

// router.get('/:id/', user360Controller.getUserByID);

router.get('/fraud/', user360Controller.getFraudByID);

// router.post('/create', (req, res) => {
//   user360.create(req.body, res);
// });

router.put('/fraud/update/', user360Controller.updateFraud);

// router.delete('/delete/:id/', (req, res) => {
//   user360.delete_user(req.params.id, res);
// });

module.exports = router;
