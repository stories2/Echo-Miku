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
const appV2 = express();
const appRoute = require('./Route/AppRoute');
const appV2Route = require('./Route/AppV2Route')

app.use(cors)
app.get('/keyboard', appRoute.keyboard)
app.post('/message', appRoute.message)
app.post('/friend', appRoute.friend)
app.delete('/friend/:user_key', appRoute.delFriend)
app.delete('/chat_room/:user_key', appRoute.chatRoom)
exports.v1 = functions.https.onRequest(app);

appV2.use(cors)
appV2.post('/hello', appV2Route.hellowWorld)
appV2.post('/picture', appV2Route.picture)
appV2.post('/basicCard', appV2Route.basicCard)
appV2.post('/commerceCard', appV2Route.commerceCard)
appV2.post('/listCard', appV2Route.listCard)
appV2.post('/carousel', appV2Route.carousel)
exports.v2 = functions.https.onRequest(appV2)