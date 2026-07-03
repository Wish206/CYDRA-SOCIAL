function generateWorkspace ()
{
    const random = Date.now();
    return `testWorkspace${random}`;

    const rando2 = Date.now();
    return `description${rando2}`;
}
module.exports = {generateWorkspace};