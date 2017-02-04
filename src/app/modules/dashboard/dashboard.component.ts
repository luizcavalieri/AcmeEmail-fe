import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MessageModel } from '../../model/message.model';
import { MessagesService } from '../../service/messages.service';


@Component({
    selector: 'dashboard-component',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.style.scss'],

})
export class DashboardComponent implements OnInit {


    // @Output()
    public messagesSent: MessageModel [] = [];

    public messages: MessageModel [] = [];

    public errorMessage: any;

    @Input()
    selectedMessageToo: MessageModel;

    public selectedMessage: MessageModel;

    public messagesScheduled: MessageModel [] = [];

    constructor(public messagesService: MessagesService) {

        this.initializeMessages();

        this.numberOfSent();
    }

    ngOnInit(): void {

    }


    initializeMessages() {

        this.messages = [
            {
                id: '1',
                name: 'John',
                messageType: 'Birthday',
                dateSchedule: '01/02/2017',
                status: 'Scheduled',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '2',
                name: 'Mary',
                messageType: 'Birthday',
                dateSchedule: '31/01/2017',
                status: 'Sent',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: "3",
                name: 'Philip',
                messageType: 'Baby Birth',
                dateSchedule: '04/02/2017',
                status: 'Scheduled',
                gift: "",
                baby: {
                    babyName: "",
                    dateOfBirth: ""
                }

            },
            {
                id: "4",
                name: 'Michael',
                messageType: 'Birthday',
                dateSchedule: '26/01/2017',
                status: 'Sent',
                gift: "",
                baby: {
                    babyName: "",
                    dateOfBirth: ""
                }

            },
            {
                id: "5",
                name: 'Martin',
                messageType: 'Baby Birth',
                dateSchedule: '20/01/2017',
                status: 'Sent',
                gift: "",
                baby: {
                    babyName: "",
                    dateOfBirth: ""
                }

            },
            {
                id: "6",
                name: 'Lewis',
                messageType: 'Birthday',
                dateSchedule: '28/01/2017',
                status: 'Sent',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '7',
                name: 'Paul',
                messageType: 'Birthday',
                dateSchedule: '01/03/2017',
                status: 'Scheduled',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '8',
                name: 'Jane',
                messageType: 'Birthday',
                dateSchedule: '24/02/2017',
                status: 'Scheduled',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '9',
                name: 'Nancy',
                messageType: 'Baby Birth',
                dateSchedule: '14/05/2017',
                status: 'Scheduled',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '10',
                name: 'Popy',
                messageType: 'Birthday',
                dateSchedule: '10/01/2017',
                status: 'Sent',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '11',
                name: 'Jenifer',
                messageType: 'Birthday',
                dateSchedule: '12/03/2016',
                status: 'Sent',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '12',
                name: 'Mary',
                messageType: 'Baby Birth',
                dateSchedule: '31/12/2016',
                status: 'Sent',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            },
            {
                id: '13',
                name: 'Ashley',
                messageType: 'Baby Birth',
                dateSchedule: '08/01/2017',
                status: 'Sent',
                gift: '',
                baby: {
                    babyName: '',
                    dateOfBirth: ''
                }

            }

        ];
    }

    numberOfSent() {

        let index = 0;

        let error = "Error";

        console.log(this.messages[index].status);

        while (this.messages[index])
        {

            if (this.messages[index].status === 'Sent')
            {

                this.messagesSent.push(this.messages[index]);
            } else if (this.messages[index].status === 'Scheduled')
            {

                this.messagesScheduled.push(this.messages[index]);
            } else
            {
                throw error;
            }

            index++;

        }


    }


}
