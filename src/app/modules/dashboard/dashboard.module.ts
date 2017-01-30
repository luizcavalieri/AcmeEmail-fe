import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MySharedModule } from '../../shared/my-shared.module';
import { CheckboxModule, DropdownModule, ButtonModule } from 'primeng/primeng';


@NgModule({
    imports: [
        MySharedModule,
        DashboardRoutingModule,
        CheckboxModule,
        DropdownModule,
        ButtonModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export default class DashboardModule {
}
