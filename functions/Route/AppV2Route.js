exports.hellowWorld = function (request, response) {

    console.log("v2 hello world headers: " + JSON.stringify(request.headers))
    console.log("v2 hello world body: " + JSON.stringify(request.body))

    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "simpleText": {
                        "text": request.userRequest.utterance
                    }
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}