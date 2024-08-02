const PostSignInRequest = require("../../../../tasks/features/account/signin/PostSignInRequest");
const SignInSuccess = require("../../../../questions/features/account/signin/SignInSuccess");
const SignInUnMatch = require("../../../../questions/features/account/signin/SignInUnMatch");

//feature under test
describe('Acceder a cuenta', () => {

    //scenario
    it('Acceder a una cuenta, exitosamente', () => {

        //When - delegate to task
        var alias = PostSignInRequest.execute();

        //Then - delegate to question
        SignInSuccess.check(alias);
    });

    //scenario
    it('Acceder a una cuenta, con credenciales no correspondientes', () => {

        //When - delegate to task
        var alias = PostSignInRequest.execute({
            "password": "NO_CORRESPONDE"
        });

        //Then - delegate to question
        SignInUnMatch.check(alias);
    });

})