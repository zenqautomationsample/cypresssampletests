let adactinData = require("../../adactin/testData/adactinData")
var signInPage = require("../../adactin/pageObjects/signInPage")
var orderBooked = require("../../adactin/pageObjects/searchHotelModule")
let searchPageLocators = require('../../adactin/pageLocators/searchHotelLocators');
var bookHotel = require("../../adactin/pageObjects/bookHotelModule")
let bookHotelLocator = require('../../adactin/pageLocators/bookHotelLocators');

describe("Book a hotel", function () {
    it("Should book the required hotel", function () {
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


        orderBooked.searchRoom(adactinData.COUNTRY, adactinData.HOTEL, adactinData.ROOM_TYPE, adactinData.NO_OF_ROOMS, adactinData.DATE_IN, adactinData.DATE_OUT)
        cy.url().should('include', 'SelectHotel');
        cy.get(searchPageLocators.VERIFY_HOTEL).should('have.value', adactinData.HOTEL)
        cy.get(searchPageLocators.VERIFY_COUNTRY).should('have.value', adactinData.COUNTRY)

        bookHotel.selectHotel();
        cy.url().should('include', 'BookHotel')


        bookHotel.bookRoom(adactinData.FIRST_NAME, adactinData.LAST_NAME, adactinData.ADDRESS, adactinData.CREDIT_CARD_NUMBER, adactinData.CREDIT_CARD_TYPE, adactinData.CREDIT_EXPIRY_MONTH, adactinData.CREDIT_EXPIRY_YEAR, adactinData.CREDIT_CVV)
        cy.url().should('include', 'BookingConfirm')
        cy.get(bookHotelLocator.FIRST_NAME).should('have.value', adactinData.FIRST_NAME)
    })
})