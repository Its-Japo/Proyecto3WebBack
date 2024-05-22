'use strict'

var mongoose = require('mongoose');
var username = encodeURIComponent("pue22296")
var password = encodeURIComponent("portafolio1234")
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.7oxuczy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/portafolio`)
        .then(() => {
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:3700");
        	});

        })
        .catch(err => console.log(err));