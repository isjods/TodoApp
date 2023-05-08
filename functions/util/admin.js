//admin.js

const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db }; //export so other modules can use it

//import firebase admin package, initialise the firestore database object