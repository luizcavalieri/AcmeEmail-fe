import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/components/checkbox/checkbox';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { ButtonModule } from 'primeng/components/button/button';
import { ContactUsModalComponent } from './contact-us/contact-us-modal.component';
import { ContactUsFormComponent } from './contact-us/contact-us-form.component';
import { ContactUsMobileComponent } from './contact-us/contact-us-mobile.component';
import { MySharedModule } from '../../shared/my-shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ThanksFormComponent } from './thanks/thanks-form.component';
import { ThanksModalComponent } from './thanks/thanks-modal.component';
import { ThanksMobileComponent } from './thanks/thanks-mobile.component';
@NgModule({
    imports: [
        MySharedModule,
        ContactRoutingModule,
        CheckboxModule,
        DropdownModule,
        ButtonModule
    ],
    declarations: [
        ContactUsModalComponent,
        ContactUsFormComponent,
        ContactUsMobileComponent,
        ThanksFormComponent,
        ThanksModalComponent,
        ThanksMobileComponent
    ], exports: [
        ContactUsFormComponent,
        ContactUsModalComponent,
        ContactUsMobileComponent,
        ThanksFormComponent,
        ThanksModalComponent,
        ThanksMobileComponent
    ]
})
export default class ContactModule {
}
