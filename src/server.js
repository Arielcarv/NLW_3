// Import dependencies/packages/libraries
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Initialize Express
const server = express();

server
    // Utilizing request body
    .use(express.urlencoded({extended: true}))

    // Utilizing the static file system
    .use(express.static('public'))

    // Configure template Engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Create routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Turn on server
server.listen(5500)
    