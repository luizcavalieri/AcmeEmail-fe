import { AlertService } from '../../app/service/alert.service';

describe('AlertService Test', () => {
    let service: AlertService;

    beforeEach(() => {
        service = new AlertService();
        service.addAlert('danger', 'danger error');
    });

    it('Add Alert', () => {
        expect(service.alerts.length).toBe(1);
    });

    it('RemoveAlert', () => {
        service.closeAlert(0);
        expect(service.alerts.length).toBe(0);
    });
});