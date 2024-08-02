const PostSignUpRequest = require("../../../../tasks/features/account/signup/PostSignUpRequest");
const SignUpSuccess = require("../../../../questions/features/account/signup/SignUpSuccess");
const AccountAlreadyExist = require("../../../../questions/features/account/signup/AccountAlreadyExist");

//feature under test
describe('Crear cuenta', () => {

    //scenario
    it('Crear una cuenta, exitosamente', () => {

        //When - delegate to task
        var alias = PostSignUpRequest.execute({
            "username": "HectorTest_"+Cypress._.random(0, 1e6)
        });

        //Then - delegate to question
        SignUpSuccess.check(alias);
    });

    //scenario
    it('Crear una cuenta, ya existente', () => {

        //When - delegate to task
        var alias = PostSignUpRequest.execute();

        //Then - delegate to question
        AccountAlreadyExist.check(alias);
    });

})