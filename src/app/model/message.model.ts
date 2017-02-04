
import { EMessageType } from './enums/message-type.enum';
import { EMessageStatus } from './enums/message-status.enum';
import { BabyModel } from './baby.model';

export class MessageModel {

    id: string;

    name: string;
    messageType: string;
    dateSchedule: string;
    status: string;
    gift: string;
    baby: BabyModel;

    static create(data){
        return new MessageModel(data);
    }

    constructor(data){
        this.id = data._id;
        this.messageType = data.messageType;
        this.name = data.name;
        this.dateSchedule = data.dateSchedule;
        this.status = data.status;
        this.gift = data.gift;
        this.baby = data.baby;;

    }
}