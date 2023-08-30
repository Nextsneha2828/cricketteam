const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "crickeTeam.db");
const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {};
