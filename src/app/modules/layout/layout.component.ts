import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout-component',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss']
})
export class LayoutComponent implements OnInit {

    public openedSideBar: boolean = false;

    ngOnInit(): void {

    }

    toggleSideBar() {
        this.openedSideBar = !this.openedSideBar;
        console.log('clicked ' + this.openedSideBar);
    }
}
