import { Component, OnInit } from '@angular/core';
import { OurServicesModel } from '../../model/our-services.model';
import { TranslateService } from 'ng2-translate';

declare var jQuery: any;

@Component({
    selector: 'dashboard-component',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.style.scss']
})
export class DashboardComponent implements OnInit {

    public services: OurServicesModel [] = [];

    constructor(public translateService: TranslateService) {
    }

    ngOnInit(): void {

        // Web Development
        this.addService('web_development');

        // Mobile Development
        this.addService('mobile_development');

        // Our Technologies
        this.addService('technology');

        // Hosting
        this.addService('hosting');

        // Outsourcing
        this.addService('outsourcing');

        // API Integrations
        this.addService('api');

        // Rescue an project
        this.addService('project_rescue');
    }

    addService(section: string) {
        // Create instance of Services Model
        let service: OurServicesModel = new OurServicesModel();

        // Calculate Title and Text keys based on the section name
        let cartTitleKey = `ourservices.${section}.cardtitle`;
        let cartTextKey = `ourservices.${section}.cardtext`;

        // Pull translated String
        this.translateService.get(
            [
                cartTitleKey,
                cartTextKey
            ]
        ).subscribe(
            value => {
                service.cardTitle = value[cartTitleKey];
                service.cardText = value[cartTextKey];
            }
        );

        // Set img Class Name
        service.imgClass = `art-${section}`;
        service.imgSrc = `../../assets/img/art_${section}_hd.png`;

        // Add Service to the List
        this.services.push(service);
    }

    removeClassHiddenDoubleModal(){
        jQuery('#contactUsModalComponent').removeClass('hidden-xs-up');
    }
}
