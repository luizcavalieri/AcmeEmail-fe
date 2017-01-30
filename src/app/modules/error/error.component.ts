import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'error-component',
    styleUrls: ['error.component.scss'],
    templateUrl: 'error.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ErrorComponent {
    public router: Router;

    @HostBinding('class') classes = 'error-page app';

    constructor(router: Router) {
        this.router = router;
    }

    searchResult(): void {
        this.router.navigate(['/app', 'dashboard-component']);
    }
}
