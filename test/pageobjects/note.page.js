class NotePage{

    //elements
    get btnNote() { return $('//a[text()="Notes"]');}
    get txtArea(){return $('//textarea[@id="notes"]');}
    get btnUpdateNotes(){return $('//input[@value="Update Notes"]');}

    //functions

    //go to notes area
    async createANote() {
        await (await this.btnNote).click();
    }
    //update the notes
    async getNote(notes) {
        await (await this.txtArea).setValue(notes);
        await (await this.btnUpdateNotes).click();
    }
    

}
module.exports = new NotePage();