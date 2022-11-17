const Router = require("express");
const router = new Router();
// const authMiddleware = require('../middleware/auth');

const { getGroups, create, update, edit, del } = require('../controllers/group');


router.get('/', getGroups);

router.post("/create", create);

router.get("/edit/:id", edit);

router.post('/save/:id', update);

router.delete('/delete/:id', del);




module.exports = router;