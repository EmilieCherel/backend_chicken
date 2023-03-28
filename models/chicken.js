const mongoose = require("mongoose");

const chickenSchema = mongoose.Schema({
  name: { type: String, require: true },
  birthday: { type: Date },
  weight: { type: Number, require: true },
  steps: { type: Number, default: 0 },
  isRunning: { type: Boolean, default: false },
  coopId: { type: mongoose.Types.ObjectId, ref: "Coop", default: "" },
});

module.exports = mongoose.model("Chicken", chickenSchema);
