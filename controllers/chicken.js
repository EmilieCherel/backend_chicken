const Chicken = require("../models/chicken");
const Coop = require("../models/coop");

exports.getAllChicken = (req, res, next) => {
  Chicken.find()
    .then((chickens) => res.status(200).json(chickens))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneChicken = (req, res, next) => {
  Chicken.findOne({ _id: req.params.id })
    .then((chicken) => res.status(200).json(chicken))
    .catch((error) => res.status(400).json({ error }));
};
exports.createChicken = (req, res, next) => {
  const chicken = new Chicken({
    name: req.body.name,
    birthday: req.body.birthday,
    weight: req.body.weight,
    steps: req.body.steps,
    isRunning: req.body.isRunning,
    coopId: req.body.coopId,
  });
  chicken.save();
  Coop.updateMany({ _id: chicken.coopId }, { $push: { chickens: chicken._id } })
    .then(() => {
      res.status(200).json({ message: "Poulet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
exports.modifyChicken = (req, res, next) => {
  Chicken.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      birthday: req.body.birthday,
      weight: req.body.weight,
      steps: req.body.steps,
      isRunning: req.body.isRunning,
      coopName: req.body.coopName,
      _id: req.params.id,
    }
  )
    .then(() => res.status(200).json({ message: "Poulet modifié!" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.runChicken = (req, res, next) => {
  Chicken.updateOne({ _id: req.params.id }, { $inc: { steps: 1 } })
    .then(() => res.status(200).json({ message: "Steps augmenté de 1" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.deleteChicken = (req, res, next) => {
  Chicken.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Poulet supprimé !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
