function generateEmail() {
    const random = Date.now();
    return `testuser${random}@yopmail.com`;
}

module.exports = { generateEmail };