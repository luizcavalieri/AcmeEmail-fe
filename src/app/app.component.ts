/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppState } from './app.service';
import { BaseService } from './service/base.service';
import { TranslateService } from 'ng2-translate';
import { PageScrollConfig } from 'ng2-page-scroll';
import { Router, NavigationEnd, Event } from '@angular/router';

declare let ga: Function;

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
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    constructor(public appState: AppState, public baseService: BaseService, translateService: TranslateService, public router: Router) {

        this.router.events.subscribe(
            (event: Event) => {
                // Todo @Luiz - please explain what this statement is doing
                if (event instanceof NavigationEnd)
                {
                    ga('send', 'pageview', event.urlAfterRedirects);
                }
            });

        translateService.use('en');

        PageScrollConfig.defaultDuration = 500;
    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
}