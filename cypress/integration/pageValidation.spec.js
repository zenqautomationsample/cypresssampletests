let adactinData = require("../../adactin/testData/adactinData")
var signInPage = require("../../adactin/pageObjects/signInPage")
var tittleVerification = require("../../adactin/pageObjects/pageValidationModule")
let searchPageLocators = require('../../adactin/pageLocators/searchHotelLocators');

describe("Verify all page navigations", function () {
  it("Should navigate to expected urls", function () {
    signInPage.openUrl(adactinData.URL)
    //cypress default assertion
    cy.url().should('include', 'HotelApp');

    //core java script assertion
    cy.url().should(($x) => {
      expect($x).include('HotelApp')
    })

    signInPage.login(adactinData.USERNAME, adactinData.PASSWORD)
    //cypress default assertion
    cy.get(searchPageLocators.HELLO_FIELD).should('contain.value', adactinData.USERNAME)
    //core java script assertion
    cy.get(searchPageLocators.HELLO_FIELD).should(($x) => {
      expect($x).to.contain.value(adactinData.USERNAME)
    })
    cy.url().should('include', 'SearchHotel');

    tittleVerification.searchHotelNavigation();
    cy.url().should('include', 'SearchHotel')


    tittleVerification.bookedIternaryNavigation();
    cy.url().should('include', 'BookedItinerary')

    tittleVerification.changePasswordNavigation();
    cy.url().should('include', 'ChangePassword')
  })
})