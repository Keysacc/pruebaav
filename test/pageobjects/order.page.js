class OrderPage{

    //elements
    get inputOrderId() { 
        return $('//input[@name="orderId"]');
    }
    get searchBtn(){
        return $('//td[@rowspan="2"]/input[@value="Search"]');
    }

    //functions
    //get order
    async order(orderNumber) {
        await (await this.inputOrderId).setValue(orderNumber);
        await (await this.searchBtn).click();
    }

}
module.exports = new OrderPage();