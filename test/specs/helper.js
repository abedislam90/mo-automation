module.exports = {
	/*
	add first item, with first size available
	if first size isn't available, just added to bag
	*/
  addFirstItem: function () {

  		$$('.product_cell_wrapper')[0].moveTo();
  		if ( $('.specific_product_sizes').isDisplayed() === true) {
  			$$('.specific_product_sizes')[0].click();
  		}
  		$('.add_to_bag').waitForDisplayed(4000);
		$('.add_to_bag').click();
		browser.pause(4000);
  		
  },
  /*
  	pop up site wide so this function just closes the popup since it seems to be created every session
  	could also put this in afterhook in the wdio.conf.js
  */
  closePopup: function() {
  	if ( $('.newsletter-wrapper').isDisplayed() === true) {
    	$('.dismiss-popup').click();
    }
  },
  /*
  checks if items exist
  */
  verifyItems: function() {
  	it('should verify if item is in shopping bag')
  	browser.url('/shopping-bag');
	$('.list_items.large-12.medium-12.small-12.column.row').isDisplayed().should.be.equal(true, 'item not added')
  }
};