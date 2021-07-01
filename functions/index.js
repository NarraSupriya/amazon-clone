const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const { request } = require("express");
const stripe = require("stripe")
('sk_test_51J7aAqSHNUbgIPdV2pG0ryRy39qhSKEvfLBvQdsFDbCyNoYuPbqJrPaxIhoJyfTgP1a020Y27z0mH8rw6IeFmmXo009uIvV4BX')


//API 

// - App config
const app = express();

// - middleware
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// Example EndPoint
// http://localhost:5001/clone-bb26a/us-central1/api