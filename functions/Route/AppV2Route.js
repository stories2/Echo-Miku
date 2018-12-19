exports.hellowWorld = function (request, response) {

    console.log("v2 hello world: " + JSON.stringify(request))

    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "simpleText": {
                        "text": "간단한 텍스트 요소입니다."
                    }
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}