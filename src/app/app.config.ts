import { Injectable } from '@angular/core';
import 'parsleyjs/dist/parsley.js';

declare let jQuery: any;

@Injectable()
export class AppConfig {
    config = {
        name: 'Acme Email',
        title: 'A shine new for messaging',
        version: '1.0.0'
    };
}

