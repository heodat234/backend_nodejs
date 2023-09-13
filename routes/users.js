var express = require('express');
const user360Controller = require('../controllers/user360Controller');

var router = express.Router();

/* GET users listing. */
router.get('/', user360Controller.getUser);

router.get('/:id/', user360Controller.getUserByID);

router.get('/frauds/', user360Controller.getFrauds);

router.get('/frauds/:id/', user360Controller.getFraudByID);

// router.post('/create', (req, res) => {
//   user360.create(req.body, res);
// });

// router.put('/update', (req, res) => {
//   user360.update(req.body, res);
// });

// router.delete('/delete/:id/', (req, res) => {
//   user360.delete_user(req.params.id, res);
// });

module.exports = router;
