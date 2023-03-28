const express = require("express");

const router = express.Router();

const coopCtrl = require("../controllers/coop");

router.get("/", coopCtrl.getAllCoop);
router.get("/:id", coopCtrl.getOneCoop);
router.post("/", coopCtrl.createCoop);
router.put("/:id", coopCtrl.modifyCoop);
router.patch("/:id", coopCtrl.modifyCoop);
router.delete("/:id", coopCtrl.deleteCoop);

module.exports = router;
