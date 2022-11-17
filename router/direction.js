const Router = require("express");
const router = new Router();
// const authMiddleware = require('../middleware/auth');
const { getDirections, create, update, edit, del } = require('../controllers/direction');


router.get('/',  getDirections);

router.post("/create", create);

router.get("/edit/:id", edit);

router.post('/save/:id', update);

router.delete('/delete/:id', del);




module.exports = router;