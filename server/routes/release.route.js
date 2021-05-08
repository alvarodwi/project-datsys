const express = require("express");
const router = express.Router();

const controller = require("../controllers/release.controller");

router.get("/", controller.get);
router.post("/", controller.store);
router.get("/:id", controller.detail);
router.post("/:id", controller.store);
router.delete("/:id", controller.delete);

module.exports = router;
