import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { HttpModule } from '@angular/http';
import { MyAlertModule } from './alert/my-alert.module';
import { AlertModule } from 'ng2-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { FloatingDirective } from '../directives/floating-directive';
import { SharedModule } from 'primeng/components/common/shared';
import { InputTextModule, InputTextareaModule, CheckboxModule } from 'primeng/primeng';

@NgModule({
    imports: [
        HttpModule,
        TranslateModule,
        Ng2PageScrollModule.forRoot()
    ],
    declarations: [
        FloatingDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AlertModule,
        MyAlertModule,
        TranslateModule,
        Ng2PageScrollModule,
        FloatingDirective,
        SharedModule,
        InputTextModule,
        InputTextareaModule,
        CheckboxModule
    ]
})
export class MySharedModule {

}
