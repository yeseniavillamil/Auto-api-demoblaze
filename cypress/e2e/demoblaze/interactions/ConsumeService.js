class ConsumeService{

    with(request, alias){

        cy.log('REQUEST: '+JSON.stringify(request));

        cy.request(request).as(alias).then((response) => {

            cy.log('RESPONSE: '+JSON.stringify(response));
        });

        return '@'+alias;
    }
}

module.exports = new ConsumeService();