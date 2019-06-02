const errorResponder = (resp, err) => {
    resp.status(500);
    var responseBody = {
        success: 'error',
        data: null,
        message: err
    };
    resp.send(responseBody);
}

module.exports = errorResponder;
