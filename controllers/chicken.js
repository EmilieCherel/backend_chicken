const Chicken = require("../models/chicken");

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
  });
  chicken
    .save()
    .then(() => {
      res.status(200).json({ message: "Poulet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
exports.modifyChicken = (req, res, next) => {};
exports.iDontKnowChicken = (req, res, next) => {};
exports.deleteChicken = (req, res, next) => {
  Chicken.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Poulet supprimé !" });
    })
    .catch((error) => {
      res.status(401).json({ error });
    });
};
