import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { MessageDetailComponent } from './detail/message-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
            children: [
                {
                path: 'messages/details/:id',
                component: MessageDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})

export class DashboardRoutingModule {
}