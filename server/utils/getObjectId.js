module.exports = (ObjectId) => {
    const objectIdArray = ObjectId.split('');
    return objectIdArray.slice(11, objectIdArray.length).join('');
};
