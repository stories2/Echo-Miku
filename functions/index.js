const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest(function(request, response) {
//     response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors')({origin: true});
const app = express();
const appRoute = require('./Route/AppRoute');

app.use(cors)
app.get('/keyboard', appRoute.keyboard)
app.post('/message', appRoute.message)
app.post('/friend', appRoute.friend)
app.delete('/friend/:user_key', appRoute.delFriend)
app.delete('/chat_room/:user_key', appRoute.chatRoom)

exports.v1 = functions.https.onRequest(app);