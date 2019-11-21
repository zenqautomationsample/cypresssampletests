;let adactinData = require("../../adactin/testData/adactinData");
var signInPage = require("../../adactin/pageActions/signInPage");
var orderBooked = require("../../adactin/pageActions/searchHotelModule");
let searchPageLocators = require('../../adactin/pageLocators/searchHotelLocators');

describe("Search a hotel", function () {
    it("Should show the required hotel", function () {
        signInPage.openUrl(adactinData.URL);
        //cypress default assertion
        cy.url().should('include', 'HotelApp');

        //core java script assertion
        cy.url().should(($x) => {
            expect($x).include('HotelApp')
        });

        signInPage.login(adactinData.USERNAME, adactinData.PASSWORD);

        //cypress default assertion
        cy.get(searchPageLocators.HELLO_FIELD).should('contain.value', adactinData.USERNAME);

        //core java script assertion
        cy.get(searchPageLocators.HELLO_FIELD).should(($x) => {
            expect($x).to.contain.value(adactinData.USERNAME)
        });

        cy.url().should('include', 'SearchHotel');

        orderBooked.searchRoom(adactinData.COUNTRY, adactinData.HOTEL, adactinData.ROOM_TYPE, adactinData.NO_OF_ROOMS, adactinData.DATE_IN, adactinData.DATE_OUT);

        cy.url().should('include', 'SelectHotel');
        cy.get(searchPageLocators.VERIFY_HOTEL).should('have.value', adactinData.HOTEL);
        cy.get(searchPageLocators.VERIFY_COUNTRY).should('have.value', adactinData.COUNTRY)
    })
});
