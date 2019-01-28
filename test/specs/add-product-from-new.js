describe('add product from new', () => {
	before(function() {
		browser.url('/');
	})

	it ('should click on new on homepage', () => {
		
		if ( $('.popup-text').waitForDisplayed(5000) ) {
			$('.dismiss-popup').click();
		}

		$$('.menu-item-link.menu-toggle')[1].getText().should.be.equal('NEW', 'looking at wrong button');
		$$('.menu-item-link.menu-toggle')[1].click();
		
	});

	it ('should add the first product, any size', () => {
		browser.getUrl().should.contain('new');
		$$('.product_cell_wrapper')[0].moveTo();
		$$(".specific_product_sizes")[0].click();
		$('.add_to_bag_button').click();
		browser.pause(4000)
	})

	it ('should verifiy item was added to cart', () => {
		browser.url('/shopping-bag');
		$('.list_items.large-12.medium-12.small-12.column.row').isDisplayed().should.be.equal(true, 'item not added')

	});

});

