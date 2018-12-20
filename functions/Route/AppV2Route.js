exports.hellowWorld = function (request, response) {

    console.log("v2 hello world headers: " + JSON.stringify(request.headers))
    console.log("v2 hello world body: " + JSON.stringify(request.body))

    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "simpleText": {
                        "text": request.body.userRequest.utterance
                    }
                }
            ],
            "quickReplies": [
                {
                    "label": "Text",
                    "action": "message",
                    "messageText": "안녕"
                },
                {
                    "label": "사진",
                    "action": "message",
                    "messageText": "사진"
                },
                {
                    "label": "기본 카드",
                    "action": "message",
                    "messageText": "기본 카드"
                },
                {
                    "label": "커머스 카드",
                    "action": "message",
                    "messageText": "커머스 카드"
                },
                {
                    "label": "리스트 카드",
                    "action": "message",
                    "messageText": "리스트 카드"
                },
                {
                    "label": "케로셀",
                    "action": "message",
                    "messageText": "케로셀"
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}

exports.picture = function (request, response) {
    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "simpleImage": {
                        "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
                        "altText": "보물상자입니다"
                    }
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}

exports.basicCard = function (request, response) {
    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "basicCard": {
                        "title": "보물상자",
                        "description": "보물상자 안에는 뭐가 있을까",
                        "thumbnail": {
                            "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
                        },
                        "profile": {
                            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
                            "nickname": "보물상자"
                        },
                        "social": {
                            "like": 1238,
                            "comment": 8,
                            "share": 780
                        },
                        "buttons": [
                            {
                                "action": "message",
                                "label": "열어보기",
                                "messageText": "짜잔! 우리가 찾던 보물입니다"
                            },
                            {
                                "action":  "webLink",
                                "label": "구경하기",
                                "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                            }
                        ]
                    }
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}

exports.commerceCard = function (request, response) {
    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "commerceCard": {
                        "description": "따끈따끈한 보물 상자 팝니다",
                        "price": 10000,
                        "discount": 1000,
                        "currency": "won",
                        "thumbnails": [
                            {
                                "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
                                "link": {
                                    "web": "https://store.kakaofriends.com/kr/products/1542"
                                }
                            }
                        ],
                        "profile": {
                            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
                            "nickname": "보물상자 팝니다"
                        },
                        "buttons": [
                            {
                                "label": "구매하기",
                                "action": "webLink",
                                "webLinkUrl": "https://store.kakaofriends.com/kr/products/1542"
                            },
                            {
                                "label": "전화하기",
                                "action": "phone",
                                "phoneNumber": "354-86-00070"
                            },
                            {
                                "label": "공유하기",
                                "action": "share"
                            }
                        ]
                    }
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}

exports.listCard = function (request, response) {
    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "listCard": {
                        "header": {
                            "title": "카카오 i 디벨로퍼스를 소개합니다",
                            "imageUrl": "http://k.kakaocdn.net/dn/xsBdT/btqqIzbK4Hc/F39JI8XNVDMP9jPvoVdxl1/2x1.jpg"
                        },
                        "items": [
                            {
                                "title": "Kakao i Developers",
                                "description": "새로운 AI의 내일과 일상의 변화",
                                "imageUrl": "http://k.kakaocdn.net/dn/APR96/btqqH7zLanY/kD5mIPX7TdD2NAxgP29cC0/1x1.jpg",
                                "link": {
                                    "web": "https://namu.wiki/w/%EB%9D%BC%EC%9D%B4%EC%96%B8(%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88)"
                                }
                            },
                            {
                                "title": "Kakao i Open Builder",
                                "description": "플러스친구 챗봇 만들기",
                                "imageUrl": "http://k.kakaocdn.net/dn/N4Epz/btqqHCfF5II/a3kMRckYml1NLPEo7nqTmK/1x1.jpg",
                                "link": {
                                    "web": "https://namu.wiki/w/%EB%AC%B4%EC%A7%80(%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88)"
                                }
                            },
                            {
                                "title": "Kakao i Voice Service",
                                "description": "보이스봇 / KVS 제휴 신청하기",
                                "imageUrl": "http://k.kakaocdn.net/dn/bE8AKO/btqqFHI6vDQ/mWZGNbLIOlTv3oVF1gzXKK/1x1.jpg",
                                "link": {
                                    "web": "https://namu.wiki/w/%EC%96%B4%ED%94%BC%EC%B9%98"
                                }
                            }
                        ],
                        "buttons": [
                            {
                                "label": "구경가기",
                                "action": "webLink",
                                "webLinkUrl": "https://namu.wiki/w/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88"
                            }
                        ]
                    }
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}

exports.carousel = function (request, response) {
    var responseMessage = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "carousel": {
                        "type": "basicCard",
                        "items": [
                            {
                                "title": "보물상자",
                                "description": "보물상자 안에는 뭐가 있을까",
                                "thumbnail": {
                                    "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
                                },
                                "buttons": [
                                    {
                                        "action": "message",
                                        "label": "열어보기",
                                        "messageText": "짜잔! 우리가 찾던 보물입니다"
                                    },
                                    {
                                        "action":  "webLink",
                                        "label": "구경하기",
                                        "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                                    }
                                ]
                            },
                            {
                                "title": "보물상자2",
                                "description": "보물상자2 안에는 뭐가 있을까",
                                "thumbnail": {
                                    "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
                                },
                                "buttons": [
                                    {
                                        "action": "message",
                                        "label": "열어보기",
                                        "messageText": "짜잔! 우리가 찾던 보물입니다"
                                    },
                                    {
                                        "action":  "webLink",
                                        "label": "구경하기",
                                        "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                                    }
                                ]
                            },
                            {
                                "title": "보물상자3",
                                "description": "보물상자3 안에는 뭐가 있을까",
                                "thumbnail": {
                                    "imageUrl": "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg"
                                },
                                "buttons": [
                                    {
                                        "action": "message",
                                        "label": "열어보기",
                                        "messageText": "짜잔! 우리가 찾던 보물입니다"
                                    },
                                    {
                                        "action":  "webLink",
                                        "label": "구경하기",
                                        "webLinkUrl": "https://e.kakao.com/t/hello-ryan"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    }

    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(responseMessage))
}