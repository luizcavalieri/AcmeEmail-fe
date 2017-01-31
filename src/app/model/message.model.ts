
import { EMessageType } from './enums/message-type.enum';
import { EMessageStatus } from './enums/message-status.enum';
import { BabyModel } from './baby.model';

export class MessageModel {

    id: string;

    name: string;
    messageType: EMessageType;
    dateSchedule: string;
    status: EMessageStatus;
    gift: string;
    baby: BabyModel;


    constructor() {
    }
}