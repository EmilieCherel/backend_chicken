const express = require("express");
const mongoose = require("mongoose");

// Enregistrement des routes
const chickenRoutes = require("./routes/chicken");

const app = express();

// Connexion à la base de données
mongoose
  .connect(
    "mongodb+srv://emiliesadaoui:858H4qbC3PisX1zH@chickencluster.fs1rg2y.mongodb.net/?retryWrites=true&w=majority",
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

module.exports = app;
