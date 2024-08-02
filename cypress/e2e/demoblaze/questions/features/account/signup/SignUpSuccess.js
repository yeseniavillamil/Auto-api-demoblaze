class SignUpSuccess{

    check(alias){

        cy.get(alias).its('status').should('eq', 200);

        cy.get(alias).should(response => {
            expect(response.body).to.not.have.property('errorMessage')
        });
    }

}

module.exports = new SignUpSuccess();