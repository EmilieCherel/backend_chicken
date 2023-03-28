const express = require("express");

const router = express.Router();

const chickenCtrl = require("../controllers/chicken");

router.get("/", chickenCtrl.getAllChicken);
router.get("/:id", chickenCtrl.getOneChicken);
router.post("/", chickenCtrl.createChicken);
router.put("/:id", chickenCtrl.modifyChicken);
router.patch("/:id", chickenCtrl.iDontKnowChicken);
router.delete("/:id", chickenCtrl.deleteChicken);

module.exports = router;
