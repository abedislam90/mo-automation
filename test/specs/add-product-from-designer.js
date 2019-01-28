describe("Add product from a designer page", () => {
	 before(function(){
	 	browser.url('/a-peace-treaty/women')
	 	if ( $('.popup-text').waitForDisplayed(5000) ) {
			$('.dismiss-popup').click();
		}
	 });

	 it ('should add first product listed', () =>{
	 	browser.getUrl().should.contain('/a-peace-treaty/women', 'not on right page');
		$$('.product_cell_wrapper')[0].moveTo();
		$(".specific_product_sizes").click();
		$('.add_to_bag_button').click();
		browser.pause(4000)
	 });

	 it ('should verifiy item was added to cart', () => {
		browser.url('/shopping-bag');
		$('.list_items.large-12.medium-12.small-12.column.row').isDisplayed().should.be.equal(true, 'item not added')

		}); 


});