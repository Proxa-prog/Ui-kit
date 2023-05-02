import Page from './page.ts';

class ButtonPage extends Page {

    public get toggleBtn() {
        return $('#buttonID')
    }

    public async click () {
        await this.toggleBtn.click();
    }

    public open () {
        return super.open();
    }
}

export default new ButtonPage();
