class SignInUnMatch{

    check(alias){

        cy.get(alias).its('status').should('eq', 200);

        cy.get(alias).should(response => {
            expect(response.body).to.have.property('errorMessage')
            expect(response.body.errorMessage).to.include('Wrong password')
        });
    }

}

module.exports = new SignInUnMatch();