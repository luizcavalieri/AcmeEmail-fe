import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './modules/error/error.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', loadChildren: () => System.import('./modules/layout/layout.module')
    },
    {
        path: 'error', component: ErrorComponent
    },
    {
        path: 'contact-us', loadChildren: () => System.import('./modules/contact/contact.module.ts')
    },
    {
        path: '**', component: ErrorComponent

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
