const mongoose = require("mongoose");

const coopSchema = mongoose.Schema({
  name: { type: String, require: true },
  capacity: { type: Number, require: true },
  chickens: [{ type: mongoose.Types.ObjectId, ref: "Chicken", default: [] }],
});

module.exports = mongoose.model("Coop", coopSchema);
