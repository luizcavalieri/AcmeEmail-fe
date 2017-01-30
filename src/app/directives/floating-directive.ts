import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({ selector: '[floating]' })
export class FloatingDirective {

    @Input()
    floating: string;

    constructor(public el: ElementRef, public renderer: Renderer) {

    }

    @HostListener('mouseenter') onMouseEnter() {
    }

    @HostListener('mouseleave') onMouseLeave() {
        if (this.floating === undefined)
        {
            this.renderer.setElementClass(this.el.nativeElement, 'empty', true);
        } else
        {
            this.renderer.setElementClass(this.el.nativeElement, 'empty', false);
        }

    }
}