exports.hellowWorld = function (request, response) {

    console.log("v2 hello world headers: " + JSON.stringify(request.headers))
    console.log("v2 hello world body: " + JSON.stringify(request.body))

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