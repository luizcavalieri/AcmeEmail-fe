import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ContactFormModel } from '../../../model/contact-form.model';
import { EmailService } from '../../../service/email.service';
import { EmailMessageModel } from '../../../model/email-message.model';
import { FROM_EMAIL, TO_EMAIL } from '../../../app.constants';

declare var jQuery: any;

@Component({
    selector: 'contact-us-form-component',
    templateUrl: 'contact-us-form.component.html'
})
export class ContactUsFormComponent implements OnInit {

    public contactFormModel: ContactFormModel = new ContactFormModel();

    constructor(public translateService: TranslateService,
                public emailService: EmailService) {
    }

    ngOnInit(): void {

    }

    sendContactForm() {

        console.log("invoke send contact-us form");

        // Send Email to Admin

        let companyName = `Company name = ${this.contactFormModel.companyName}`;
        let name = `Name = ${this.contactFormModel.name}`;
        let phone = `Phone = ${this.contactFormModel.phone}`;
        let email = `Email = ${this.contactFormModel.email}`;
        let message = `Message = ${this.contactFormModel.yourMessage}`;

        let adminEmailMessage: EmailMessageModel = new EmailMessageModel();
        adminEmailMessage.fromEmail = FROM_EMAIL;
        adminEmailMessage.toEmail = TO_EMAIL;
        adminEmailMessage.subject = 'Contact Form Enquiry';
        adminEmailMessage.content = `
            ${companyName}
            ${name}
            ${phone}
            ${email}
            ${message}`;

        // Store Contact form content in service
        this.emailService.contactFormContent = adminEmailMessage.content;

        this.emailService.sendEmail(
            adminEmailMessage
        ).subscribe(
            (resp) => {
                console.log('Email sent');

                // this will remove animation from the modal is being closed in the background.
                jQuery('#contactUsModalComponent').addClass('hidden-xs-up');

                // Hide Modal


            },
            (error) => {
                console.error('Error ' + error);
            }
        );

        // Send Email to Customer

        let customerEmailMessage: EmailMessageModel = new EmailMessageModel();
        customerEmailMessage.fromEmail = FROM_EMAIL;
        customerEmailMessage.toEmail = this.contactFormModel.email;
        customerEmailMessage.customerName = this.contactFormModel.name;
        customerEmailMessage.templateId = '88eb71e3-0823-4b9c-92f9-330efcb8bce3';
        // Todo Adding empty string for now
        customerEmailMessage.subject = ' ';
        customerEmailMessage.content = ' ';

        this.emailService.sendEmail(
            customerEmailMessage
        ).subscribe(
            (resp) => {
            },
            (error) => {
                console.error('Error ' + error);
            }
        );

    }
}
