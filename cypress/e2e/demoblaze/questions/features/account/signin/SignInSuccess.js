class SignInSuccess{

    check(alias){

        cy.get(alias).its('status').should('eq', 200);

        cy.get(alias).should(response => {
            expect(response.body).to.include('Auth_token: ')
        });
    }

}

module.exports = new SignInSuccess();