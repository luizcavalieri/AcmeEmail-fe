/**
 * Created by luizcavalieri on 3/2/17.
 */

import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageModel } from '../../../model/message.model';

declare var jQuery: any;

@Component({
    selector: 'message-detail-component',
    templateUrl: 'message-detail.component.html'
})

@Injectable()
export class MessageDetailComponent implements OnInit {

    id: string;
    private sub: any;

    @Input()
    message: MessageModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): any {

        // this.sub = this.route.params.subscribe(params => {
        //     this.id = params['id'];
        // });

    }



}