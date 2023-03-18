function errorHandler(error, request, response, mext) {
    const { status = 500, message = "Somthing went wrong!" } = error;
    response.status(status).json({ error: message })
}

module.exports = errorHandler;