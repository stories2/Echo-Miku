exports.keyboard = function (request, response) {
    responseMessage = {
        "type" : "text"
    }

    // response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}

exports.message = function (request, response) {

    console.log("/message-> user_key: " + request.body["user_key"] + " type: " + request.body["type"] + " content: " + request.body["content"])
    responseMessage = {
        "message": {
            "text": request.body["content"],
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}

exports.friend = function (request, response) {

    console.log("/friend-> user_key: " + request.body["user_key"])
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send()
}

exports.delFriend = function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send()
}

exports.chatRoom = function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send()
}