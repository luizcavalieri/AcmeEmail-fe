/**
 * Created by luizcavalieri on 30/01/2017.
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'app/service/users.service';
import { LoggingService } from 'app/service/logging.service';
import { BaseService } from 'app/service/base.service';
import { JWT_TOKEN_NAME } from 'app/app.constants';
import { provideAuth, JwtHelper } from 'angular2-jwt';
import { AuthGuardService } from '../service/auth-guard.service';

const authHttpProvider = provideAuth({
    headerName: 'Authorization',
    headerPrefix: 'Bearer',
    tokenName: JWT_TOKEN_NAME,
    tokenGetter: (() => localStorage.getItem(JWT_TOKEN_NAME)),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
    noJwtError: true,
    noTokenScheme: true
});

@NgModule({
    imports: [CommonModule],
    providers: [
        authHttpProvider,
        AuthGuardService,
        JwtHelper,
        LoggingService,

        BaseService
    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

        if (parentModule)
        {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
