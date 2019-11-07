let searchPageLocators = require('../pageLocators/searchHotelLocators');
module.exports={
    searchRoom: function(country,hotel,room_type,no_of_rooms,checkInDate,checkOutdate){
       cy.get(searchPageLocators.SELECT_LOCATION)
         .select(country)
         
        cy.get(searchPageLocators.SELECT_HOTEL)
        .select(hotel)
        cy.get(searchPageLocators.ROOM_TYPE) 
        .select(room_type)
        cy.get(searchPageLocators.SELECT_ROOMS)
        .select(no_of_rooms)
        cy.get(searchPageLocators.CHECK_IN_DATE).clear().type(checkInDate)
        cy.get(searchPageLocators.CHECK_OUT_DATE).clear().type(checkOutdate)

        cy.get(searchPageLocators.SEARCH_BUTTON).click()
       
    },
    verifySearchRoom:function(){
        
    }
}