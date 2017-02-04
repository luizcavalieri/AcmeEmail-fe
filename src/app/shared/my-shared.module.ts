import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { FloatingDirective } from '../directives/floating-directive';
import { SharedModule } from 'primeng/components/common/shared';
import { InputTextModule, InputTextareaModule, CheckboxModule, DataTableModule } from 'primeng/primeng';


@NgModule({
    imports: [
        HttpModule,
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
        Ng2PageScrollModule,
        FloatingDirective,
        SharedModule,
        InputTextModule,
        InputTextareaModule,
        CheckboxModule,
        DataTableModule,

    ]
})
export class MySharedModule {

}
