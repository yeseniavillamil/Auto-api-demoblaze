
const Environments = require("../../../../constants/Environments");
const EncodeUtils = require("../../../../utils/EncodeUtils");
const ConsumeService = require("../../../../interactions/ConsumeService");

class PostSignInRequest{

    ALIAS = 'SignIn';

    REQUEST = {
        method : 'POST',
        url : `${Environments.demoblaze}`+'/login',
        headers :{},
        body: {
            "username": "Hector_Test",
            "password": "Clave"
        }
    };

    setup(bodyTest){

        if(bodyTest){
            if(bodyTest.username){
                this.REQUEST.body.username = bodyTest.username
            }
            if(bodyTest.password){
                this.REQUEST.body.password = bodyTest.password
            }
        }

        this.REQUEST.body.password = EncodeUtils.base64(this.REQUEST.body.password);
    }

    execute(bodyTest){

        this.setup(bodyTest);
        
        return ConsumeService.with(this.REQUEST, this.ALIAS);
    }
}

module.exports = new PostSignInRequest();