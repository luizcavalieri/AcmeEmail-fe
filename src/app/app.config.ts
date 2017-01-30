import { Injectable } from '@angular/core';
import 'parsleyjs/dist/parsley.js';

declare let jQuery: any;

@Injectable()
export class AppConfig {
    config = {
        name: 'AcmeEmail',
        title: 'A shine new for App messaging',
        version: '1.0.0'
    };
}