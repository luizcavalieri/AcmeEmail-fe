/**
 * Created by LuizCavalieri on 30/01/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
    alerts: Array<Object> = [];

    constructor() {
    }

    addAlert(type: string, msg: string) {
        this.alerts[0] = ({ type: type, msg: msg, dismissible: false });
    }

    closeAlert(index): void {
        this.alerts.splice(index, 1);
    };
}
