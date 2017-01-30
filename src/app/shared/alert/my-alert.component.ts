import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../../service/alert.service';

@Component({
    selector: 'my-alert-component',
    templateUrl: 'my-alert.component.html',
    providers: [AlertService]
})
export class MyAlertComponent implements OnInit {

    @Input()
    public alertService: AlertService;

    constructor() {
    }

    ngOnInit() {
    }
}