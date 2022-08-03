const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
require('dotenv').config();

const {SENDER_EMAIL,SENDER_PASSWORD} =  process.env;


