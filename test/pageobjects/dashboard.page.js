class DashboardPage{
    //elements
    get dismissBtn() {
      return $('//button[text()="Dismiss"]');
    }
    get search() {
      return $("#top_search");
    }
    get searchOrder() {
      return $('//a[text()="Order Search"]');
    }

    get inputOrderId() { 
      return $('//input[@name="orderId"]');
    }
  
    //functions
    //close pop up
    async closePopup() {
      await (await this.dismissBtn).click();
    }
  
    //go to search order
    async doSearch() {
      await (await this.search).moveTo();
      await (await this.searchOrder).click();
    }
}
module.exports = new DashboardPage();