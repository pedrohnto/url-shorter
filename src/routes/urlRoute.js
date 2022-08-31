const express = require("express");
const router = express.Router();
const controller = require("../controllers/urlController");

router.post("/", controller.post);
router.get("/:path", controller.get);
router.get("/:id", controller.getById);
router.get("/:creationDate", controller.getByDate);

module.exports = router;
