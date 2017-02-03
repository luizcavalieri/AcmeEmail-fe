/**
 * Created by luizcavalieri on 3/2/17.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OurServicesModel } from '../../model/our-services.model';
import { MessageModel } from '../../../model/message.model';


declare var jQuery: any;

@Component({
    selector: 'message-list-component',
    templateUrl: 'message-list.component.html',
    styleUrls: ['../dashboard.style.scss']

})
export class MessageListComponent implements OnInit {

    @Input()
    messagesScheduled: MessageModel[];

    @Output()
    selectedMessage: MessageModel;

    @Input()
    selected: MessageModel;

    constructor() {

    }

    ngOnInit(): void {

    }

    onSelect(message: MessageModel): void{

        this.selectedMessage = message;

        console.debug(message.name);
    }


    btnClick(message: MessageModel){

        this.selectedMessage = message;

        console.debug(message.name);

    }

}
