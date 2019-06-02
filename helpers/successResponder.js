const successResponder = (resp, payload) => {
    resp.status(200);
    var responseBody = {
        success: 'true',
        data: payload,
        message: null
    };
    resp.send(responseBody);
}

module.exports = successResponder;
