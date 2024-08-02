
const Environments = require("../../../../constants/Environments");
const EncodeUtils = require("../../../../utils/EncodeUtils");
const ConsumeService = require("../../../../interactions/ConsumeService");

class PostSignUpRequest{

    ALIAS = 'SignUp';

    REQUEST = {
        method : 'POST',
        url : `${Environments.demoblaze}`+'/signup',
        headers :{},
        body: {
            "username": "HectorTest",
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

module.exports = new PostSignUpRequest();