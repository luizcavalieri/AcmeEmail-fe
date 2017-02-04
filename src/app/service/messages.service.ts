/**
 * Created by luizcavalieri on 3/2/17.
 */


import { MessageModel } from '../model/message.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MessagesService {

    public messageModel: MessageModel;



    constructor(private http: Http,
                public baseService: BaseService){

    }

    getMessages(): Observable<MessageModel[]> {
        return this.baseService.getList(`http://beta.json-generator.com/api/json/get/N18vmnhPf`);
    }


    getAllMessages (): Observable<MessageModel[]> {
        return this.http.get('http://beta.json-generator.com/api/json/get/N18vmnhPf')
            .map(this.extractData)
            .catch(this.handleError);
    }

    //
    // getMessages(){
    //
    //     this.messageModel = this.http.get('http://beta.json-generator.com/api/json/get/N18vmnhPf')
    //         .map(res => res.json())
    //         .map(rawMessage => rawMessage.map(MessageModel.create));
    // }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}