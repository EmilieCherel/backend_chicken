const express = require("express");
const mongoose = require("mongoose");

// Dotenv pour la variable d'environnement
const dotenv = require("dotenv");
dotenv.config();

// Enregistrement des routes
const chickenRoutes = require("./routes/chicken");
const coopRoutes = require("./routes/coop");

const app = express();

// Connexion à la base de données
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}@${process.env.MONGOOSE_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// Middleware pour les erreurs CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.json());
app.use("/api/chicken", chickenRoutes);
app.use("/api/coop", coopRoutes);

module.exports = app;
