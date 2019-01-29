var helper = require('./helper')

describe("Add a product from a trunkshow page", () => {
	before(function(){
	 	browser.url('/isabel-marant-etoile-pf19')
	});

	it ('should add first product listed', () => {
		helper.closePopup();
		browser.getUrl().should.contain('isabel-marant-etoile-pf19', 'wrong url');
		helper.addFirstItem();
		helper.verifyItems();
	})

})