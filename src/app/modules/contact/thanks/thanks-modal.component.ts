import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { EmailService } from '../../../service/email.service';
import { EmailMessageModel } from '../../../model/email-message.model';
import { FROM_EMAIL, TO_EMAIL } from '../../../app.constants';
import { ContactFormExtraModel } from '../../../model/contact-form-extra.model';

declare var jQuery: any;

@Component({
    selector: 'thanks-modal-component',
    templateUrl: 'thanks-modal.component.html'
})
export class ThanksModalComponent implements OnInit {

    public companySizeList: any = [];
    public companyStageList: any = [];
    public companyPositionList: any = [];
    public hearAboutUsList: any = [];

    public contactFormExtraModel: ContactFormExtraModel = new ContactFormExtraModel();

    constructor(public translateService: TranslateService,
                public emailService: EmailService) {
    }

    ngOnInit(): void {

        this.companySizeList.push({ label: 'Company Size (employees)', value: null });
        this.companySizeList.push({ label: '1-10', value: '1-10' });
        this.companySizeList.push({ label: '11-50', value: '11-50' });
        this.companySizeList.push({ label: '50-100', value: '50-100' });
        this.companySizeList.push({ label: '100+', value: '100+' });

        this.companyStageList.push({ label: 'Company Stage', value: null });
        this.companyStageList.push({ label: 'Prototyping', value: 'Prototyping' });
        this.companyStageList.push({ label: 'Startup', value: 'Startup' });
        this.companyStageList.push({ label: 'Ongoing for 2+ years', value: 'Ongoing for 2+ years' });

        this.companyPositionList.push({ label: 'Your Position in the Company?', value: null });
        this.companyPositionList.push({ label: 'Developer', value: 'Developer' });
        this.companyPositionList.push({
            label: 'CEO / Founder / Director', value: 'CEO / Founder / Director'
        });
        this.companyPositionList.push({ label: 'Manager', value: 'Manager' });
        this.companyPositionList.push({ label: 'Marketing', value: 'Marketing' });
        this.companyPositionList.push({ label: 'Other', value: 'Other' });

        this.hearAboutUsList.push({ label: 'How did you hear about us?', value: null });
        this.hearAboutUsList.push({ label: 'Conference / Meetup', value: 'Conference / Meetup' });
        this.hearAboutUsList.push({ label: 'Google', value: 'Google' });
        this.hearAboutUsList.push({ label: 'Recommendation', value: 'Recommendation' });

    }

    sendContactForm() {

        console.log("invoke send contact-us form");

        let industry = `Industry = ${this.contactFormExtraModel.industry}`;
        let stage = `Stage = ${this.contactFormExtraModel.companyStage}`;
        let companySize = `Size = ${this.contactFormExtraModel.companySize}`;
        let position = `Position = ${this.contactFormExtraModel.position}`;
        let heardAboutUs = `Heard About Us = ${this.contactFormExtraModel.heardAboutUs}`;

        let emailMessage: EmailMessageModel = new EmailMessageModel();
        emailMessage.fromEmail = FROM_EMAIL;
        emailMessage.toEmail = TO_EMAIL;
        emailMessage.subject = 'Contact Form Enquiry - Extra Info';
        emailMessage.content = `
            ${this.emailService.contactFormContent}
            ${industry}
            ${stage}
            ${companySize}
            ${position}
            ${heardAboutUs}`;

        this.emailService.sendEmail(
            emailMessage
        ).subscribe(
            () => {
                console.log('Email sent');
                // Hide Modal
                // jQuery('.modal').modal('hide');

                jQuery('#contactUsModal').modal('toggle');

            },
            (error) => {
                console.error('Error ' + error);
            }
        );
    }

    closeBoth(){
        jQuery('#contactUsModal').modal('hide');

    }


}
