let adactinData = require("../../adactin/testData/adactinData")
var signInPage = require("../../adactin/pageObjects/signInPage")
var errorDate = require("../../adactin/pageObjects/dateErrorModule")
let searchPageLocators = require('../../adactin/pageLocators/searchHotelLocators');

describe("Book hotel for invalid date", function () {
    it("should throw an error", function () {
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

        errorDate.orderRoom(adactinData.COUNTRY, adactinData.HOTEL, adactinData.ROOM_TYPE, adactinData.NO_OF_ROOMS, adactinData.ERROR_DATE_IN, adactinData.ERROR_DATE_OUT)
        cy.get(searchPageLocators.ERROR_MESSAGE, { timeout: 10000 }).should('be.visible')

    })
})