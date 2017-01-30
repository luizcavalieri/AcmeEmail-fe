import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ContactUsMobileComponent } from './contact-us/contact-us-mobile.component';
import { ThanksMobileComponent } from './thanks/thanks-mobile.component';

export const routes: Routes = [
    {
        path: '',
        component: ContactUsMobileComponent,
        pathMatch: 'full'
    },
    {
        path: 'thanks',
        component: ThanksMobileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class ContactRoutingModule {
}