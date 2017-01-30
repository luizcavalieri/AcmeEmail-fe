import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { ENV_PROVIDERS } from './environment';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InteralStateType } from './app.service';
import { ErrorComponent } from './modules/error/error.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MySharedModule } from './shared/my-shared.module';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

/*
 * Platform and Environment providers/directives/pipes
 */
// App is our top level component

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState


];

type StoreType = {
    state: InteralStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        ErrorComponent
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        HttpModule,
        CoreModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(
                http,
                '/assets/i18n',
                '.json'
            ),
            deps: [Http]
        }),
        MySharedModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef,
                public appState: AppState) {
        console.log(process.env.ENV);

    }

    hmrOnInit(store: StoreType) {
        if (!store || !store.state) return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store)
        {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store: StoreType) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}

