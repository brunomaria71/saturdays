import { initializeApp, cert } from "firebase-admin/app";

import serviceAccount from "./credentials.js";

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});