import { LoginPage } from './page-objects/login.page';


describe('AcmeEmail Login Page', function () {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getTitle()).toEqual('AcmeEmail');
    });
});
