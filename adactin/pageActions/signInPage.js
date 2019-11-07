let signInLocators = require('../pageLocators/signInPageLocators');

module.exports = {
	openUrl: function (url) {
		cy.visit(url);
	},
	login: function (username, password) {
		cy.get(signInLocators.USERNAME_FIELD)
			.type(username);
		cy.get(signInLocators.PASSWORD)
			.type((password));
		cy.get(signInLocators.LOGIN_BUTTTON)
			.click();

	}

};
