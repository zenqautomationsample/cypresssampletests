let titleVerificationLoc = require('../pageLocators/titleVerificationLocators');

module.exports = {

    searchHotelNavigation:function(){
        cy.get(titleVerificationLoc.SEARCH_HOTEL)
        .click();  
    },
    bookedIternaryNavigation:function(){
        cy.get(titleVerificationLoc.BOOKED_ITERNARY)
        .click();  
    },
    changePasswordNavigation:function(){
        cy.get(titleVerificationLoc.CHANGE_PASSWORD)
        .click();  
    },
  
}