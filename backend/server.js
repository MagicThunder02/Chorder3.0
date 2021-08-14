/*-------------------------------------------------------------------------------------------------------------------
    https://itnext.io/express-server-for-an-angular-application-part-1-getting-started-2cd27de691bd
-------------------------------------------------------------------------------------------------------------------*/

"use strict";
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const _port = 80;
const _address = '0.0.0.0';
const _app_folder = './dist';

global.app = express();
//https://italiancoders.it/abilitare-cors-su-express/
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded());

app.use("/dist", express.static(__dirname + "/dist"));

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, { maxAge: '1y' }));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, { root: _app_folder });
});

// ---- START UP THE NODE SERVER  ----
app.listen(_port, _address, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});