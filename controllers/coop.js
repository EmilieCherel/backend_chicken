const Coop = require("../models/coop");

exports.getAllCoop = (req, res, next) => {
  Coop.find()
    .then((coops) => res.status(200).json(coops))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneCoop = (req, res, next) => {
  Coop.findOne({ _id: req.params.id })
    .then((coop) => res.status(200).json(coop))
    .catch((error) => res.status(400).json({ error }));
};
exports.createCoop = (req, res, next) => {
  const coop = new Coop({
    name: req.body.name,
    capacity: req.body.capacity,
  });
  coop
    .save()
    .then(() => {
      res.status(200).json({ message: "Poulailler enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
exports.modifyCoop = (req, res, next) => {
  Coop.updateOne(
    { _id: req.params.id },
    {
      name: req.body.name,
      capacity: req.body.capacity,
      _id: req.params.id,
    }
  )
    .then(() => res.status(200).json({ message: "Poulailler modifié!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteCoop = (req, res, next) => {
  Coop.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Poulailler supprimé !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
