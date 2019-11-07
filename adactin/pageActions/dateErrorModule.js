let orderbookLocator = require('../pageLocators/searchHotelLocators');
module.exports={
    orderRoom: function(country,hotel,room_type,no_of_rooms,checkInDate,checkOutdate){
        cy.get(orderbookLocator.SELECT_LOCATION)
          .select(country)
          
         cy.get(orderbookLocator.SELECT_HOTEL)
         .select(hotel)
         cy.get(orderbookLocator.ROOM_TYPE) 
         .select(room_type)
         cy.get(orderbookLocator.SELECT_ROOMS)
         .select(no_of_rooms)
         cy.get(orderbookLocator.CHECK_IN_DATE).clear().type(checkInDate)
         cy.get(orderbookLocator.CHECK_OUT_DATE).clear().type(checkOutdate)
 
         cy.get(orderbookLocator.SEARCH_BUTTON).click()
    }
}