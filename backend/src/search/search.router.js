const router = require("express").Router();
const controller = require("./search.controller")

router.route("/searchRequest/:item_name").get(controller.search);
router.route("/").get(controller.list);





module.exports = router;
