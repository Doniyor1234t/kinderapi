const Router = require("express");
const router = new Router();
// const authMiddleware = require('../middleware/auth');

const { getPayments, create, payId, del, delPayId  } = require('../controllers/payment');


router.get('/', getPayments);

router.post("/create", create);

router.get("/pay/:id", payId);

router.delete('/delete/:id', del);

router.delete('/del/:id/:index', delPayId);




module.exports = router;