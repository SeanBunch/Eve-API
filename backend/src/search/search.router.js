const router = require("express").Router();
const controller = require("./search.controller")

router.route("/:itemName").get(controller.read);
router.route("/").get(controller.list);





module.exports = router;
