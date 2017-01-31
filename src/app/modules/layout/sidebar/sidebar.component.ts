import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sidebar-component',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.style.scss']
})
export class SidebarComponent implements OnInit {

    @Output()
    public onToggleSideBar = new EventEmitter();

    ngOnInit(): void {
    }

    toggleSideBar() {

        this.onToggleSideBar.emit();
        console.log('toggle navbar');
    }

}
