var helper = require('./helper')

describe("Add product from a designer page", () => {

	before(function(){
		browser.url('/a-peace-treaty/women');
	});

	 it ('should add first product listed', () =>{
	 	helper.closePopup();
	 	browser.getUrl().should.contain('/a-peace-treaty/women', 'not on right page');
	 	helper.addFirstItem();
	 	helper.verifyItems();
	 });

});