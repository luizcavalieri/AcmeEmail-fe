import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar-component',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.style.scss']
})
export class NavbarComponent implements OnInit {

    @Output()
    public onToggleSideBar = new EventEmitter();

    ngOnInit(): void {
    }

    toggleSideBar() {
        this.onToggleSideBar.emit();
        console.log('toggle navbar');
    }
}
