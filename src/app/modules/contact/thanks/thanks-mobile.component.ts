import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'thanks-mobile-component',
    templateUrl: 'thanks-mobile.component.html',
    styleUrls: ['../contact.style.scss']

})
export class ThanksMobileComponent implements OnInit {


    ngOnInit(): void {
        // Scroll top on router redirects
        document.body.scrollTop = 0;

    }
}
