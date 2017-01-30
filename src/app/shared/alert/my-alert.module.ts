/**
 * Created by luizcavalieri on 29/09/2016.
 */
import { NgModule } from '@angular/core';
import { MyAlertComponent } from './my-alert.component';
import { AlertModule } from 'ng2-bootstrap';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        AlertModule
    ],
    declarations: [
        MyAlertComponent
    ],
    exports: [
        MyAlertComponent
    ]
})
export class MyAlertModule {
}
