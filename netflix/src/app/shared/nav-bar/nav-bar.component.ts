import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component(
    {
        selector:'app-nav-bar',
        templateUrl:'./nav-bar.component.html',
        styleUrls:['./nav-bar.component.scss']
    }

)
export class NavBarComponent implements OnInit
{
    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
    @Input() opened = false;
    construtor()
    {

    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    toggle()
    {
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);
    }
   
}