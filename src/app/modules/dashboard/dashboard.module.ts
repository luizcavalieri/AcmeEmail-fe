import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MySharedModule } from '../../shared/my-shared.module';
import { AutoCompleteModule, CheckboxModule, DropdownModule, ButtonModule } from 'primeng/primeng';
import { MessageDetailComponent } from './detail/message-detail.component';
import { MessageListComponent } from './list/message-list.component';



@NgModule({
    imports: [
        MySharedModule,
        DashboardRoutingModule,
        CheckboxModule,
        DropdownModule,
        ButtonModule,
        AutoCompleteModule,

    ],
    declarations: [
        DashboardComponent,
        MessageDetailComponent,
        MessageListComponent
    ]
})
export default class DashboardModule {
}
