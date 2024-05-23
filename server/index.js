const mongoose = require('mongoose');
const app = require('./app'); // Assuming you have an app.js file where you set up your Express app
const port = 3700;

const mongoUri = process.env.MONGO_URI || 'mongodb+srv://pue22296:portafolio1234@cluster0.7oxuczy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/portafolio';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conexión a la base de datos establecida satisfactoriamente...");

  // Creacion del servidor
  app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en la url: localhost:${port}`);
  });

}).catch(err => console.log('Error al conectar a la base de datos:', err));
