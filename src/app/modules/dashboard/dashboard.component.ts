import { Component, OnInit } from '@angular/core';
import { OurServicesModel } from '../../model/our-services.model';
import { TranslateService } from 'ng2-translate';
import { MessageModel } from '../../model/message.model';
import { EMessageType } from '../../model/enums/message-type.enum';
import { EMessageStatus } from '../../model/enums/message-status.enum';
import { BabyModel } from '../../model/baby.model';

declare var jQuery: any;

@Component({
    selector: 'dashboard-component',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.style.scss']
})
export class DashboardComponent implements OnInit {

    public services: OurServicesModel [] = [];
    public messages: MessageModel [] = [];
    public baby: BabyModel;

    public eMessageType: EMessageType;
    public eMessageStatus: EMessageStatus;

    public messagesSent: MessageModel [] = [];

    public messagesScheduled: MessageModel [] = [];


    constructor(public translateService: TranslateService) {

        this.initializeMessages();

        this.numberOfSent();

        console.log(this.initializeMessages());

    }


    ngOnInit(): void {


    }

    initializeMessages(){

        this.messages = [
            {
                id: '1',
                name: 'John',
                messageType: 0,
                dateSchedule: '01/02/2017',
                status: 0,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '2',
                name: 'Mary',
                messageType: 0,
                dateSchedule: '31/01/2017',
                status: 0,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: "3",
                name: 'Philip',
                messageType: 0,
                dateSchedule: '04/02/2017',
                status: 1,
                gift: "",
                baby:
                    {
                        babyName: "",
                        dateOfBirth: ""
                    }

            },
            {
                id: "4",
                name: 'Michael',
                messageType: 0,
                dateSchedule: '26/01/2017',
                status: 0,
                gift: "",
                baby:
                    {
                        babyName: "",
                        dateOfBirth: ""
                    }

            },
            {
                id: "5",
                name: 'Martin',
                messageType: 0,
                dateSchedule: '20/01/2017',
                status: 0,
                gift: "",
                baby:
                    {
                        babyName: "",
                        dateOfBirth: ""
                    }

            },
            {
                id: "6",
                name: 'Lewis',
                messageType: 0,
                dateSchedule: '28/01/2017',
                status: 0,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '7',
                name: 'Paul',
                messageType: 0,
                dateSchedule: '01/03/2017',
                status: 1,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '8',
                name: 'Jane',
                messageType: 0,
                dateSchedule: '24/02/2017',
                status: 1,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '9',
                name: 'Nancy',
                messageType: 0,
                dateSchedule: '14/05/2017',
                status: 1,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '10',
                name: 'Popy',
                messageType: 0,
                dateSchedule: '10/01/2017',
                status: 0,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '11',
                name: 'Jenifer',
                messageType: 0,
                dateSchedule: '12/03/2017',
                status: 1,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '12',
                name: 'Mary',
                messageType: 0,
                dateSchedule: '08/07/2017',
                status: 1,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            },
            {
                id: '13',
                name: 'Ashley',
                messageType: 0,
                dateSchedule: '08/01/2017',
                status: 0,
                gift: '',
                baby:
                    {
                        babyName: '',
                        dateOfBirth: ''
                    }

            }

        ];
    }

    numberOfSent(){

        let index = 0;

        let error = "Error";

        console.log(this.messages[index].status);

        while(this.messages[index]){

            if(this.messages[index].status === 0){

                this.messagesSent.push(this.messages[index]);
            }else if(this.messages[index].status === 1){

                this.messagesScheduled.push(this.messages[index]);
            }else{
                throw error;
            }

            index ++;

        }


    }

    // addService(section: string) {
    //     // Create instance of Services Model
    //     let service: OurServicesModel = new OurServicesModel();
    //
    //     // Calculate Title and Text keys based on the section name
    //     let cartTitleKey = `ourservices.${section}.cardtitle`;
    //     let cartTextKey = `ourservices.${section}.cardtext`;
    //
    //     // Pull translated String
    //     this.translateService.get(
    //         [
    //             cartTitleKey,
    //             cartTextKey
    //         ]
    //     ).subscribe(
    //         value => {
    //             service.cardTitle = value[cartTitleKey];
    //             service.cardText = value[cartTextKey];
    //         }
    //     );
    //
    //     // Set img Class Name
    //     service.imgClass = `art-${section}`;
    //     service.imgSrc = `../../assets/img/art_${section}_hd.png`;
    //
    //     // Add Service to the List
    //     this.services.push(service);
    // }


}
