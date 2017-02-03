/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppState } from './app.service';
import { BaseService } from './service/base.service';
import { TranslateService } from 'ng2-translate';
import { PageScrollConfig } from 'ng2-page-scroll';
import { Router, NavigationEnd, Event} from '@angular/router';


/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './scss/application.scss'
    ],
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

    constructor(public appState: AppState, public baseService: BaseService, public router: Router) {

        this.router.events.subscribe(
            (event: Event) => {

                if (event instanceof NavigationEnd)
                {
                    // ga('send', 'pageview', event.urlAfterRedirects);
                }
            });



        PageScrollConfig.defaultDuration = 500;
    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
}
