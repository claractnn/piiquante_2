//Importer mongoose
const mongoose = require('mongoose');

//Importer dotenv
const dotenv = require('dotenv');
dotenv.config();

//Connecter la base de données MongoDB et gérer l'erreur
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@piiquante.zdq5mmz.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Exporter mongoose
module.exports = mongoose;

