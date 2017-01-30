import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MySharedModule } from '../../shared/my-shared.module';
import { CheckboxModule, DropdownModule, ButtonModule } from 'primeng/primeng';
import ContactUsModule from '../contact/contact.module';

@NgModule({
    imports: [
        MySharedModule,
        DashboardRoutingModule,
        CheckboxModule,
        DropdownModule,
        ButtonModule,
        ContactUsModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export default class DashboardModule {
}
