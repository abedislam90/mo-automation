var helper = require('./helper')

describe('add product from new', () => {

	before(function(){
		browser.url('/');
	});

	it ('should click on new on homepage', () => {
		helper.closePopup();
		$$('.menu-item-link.menu-toggle')[1].getText().should.be.equal('NEW', 'looking at wrong button');
		$$('.menu-item-link.menu-toggle')[1].click();
	});

	it ('should add the first product, any size', () => {
		browser.getUrl().should.contain('new');
		helper.addFirstItem();
		helper.verifyItems();

	})
});

