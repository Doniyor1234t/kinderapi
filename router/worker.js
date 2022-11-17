const Router = require("express");
const router = new Router();
// const authMiddleware = require('../middleware/auth');

const { getWorkers, create, update, edit, del } = require('../controllers/worker');


router.get('/', getWorkers);

router.post("/create", create);

router.get("/edit/:id", edit);

router.post('/save/:id', update);

router.delete('/delete/:id', del);




module.exports = router;