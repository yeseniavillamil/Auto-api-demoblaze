class EncodeUtils{

    base64(text){
        return btoa(text);
    }

}

module.exports = new EncodeUtils();