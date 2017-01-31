import 'jquery-slimscroll';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { MySharedModule } from '../../shared/my-shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        LayoutRoutingModule,
        TooltipModule,
        MySharedModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,

    ]
})

export default class LayoutModule {
}
