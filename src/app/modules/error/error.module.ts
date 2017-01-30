import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component.ts';
import { MySharedModule } from '../../shared/my-shared.module';

export const routes = [
    { path: '', component: ErrorComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports: [
        MySharedModule,
        RouterModule.forChild(routes),
    ]
})
export default class ErrorModule {
    static routes = routes;
}
