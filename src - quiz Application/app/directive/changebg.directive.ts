import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appChnageBg]'
})

export class ChangeBgDirective {
    @Input() isCorrect:boolean = false;
    constructor(private el: ElementRef, private render: Renderer2){}

    @HostListener('click') getAnswer(){
        if(this.isCorrect){
            this.render.setStyle(this.el.nativeElement, 'background', 'green');
            this.render.setStyle(this.el.nativeElement, 'color', '#fff');
            this.render.setStyle(this.el.nativeElement, 'border-color', 'grey');
        }else{
            this.render.setStyle(this.el.nativeElement, 'background', 'red');
            this.render.setStyle(this.el.nativeElement, 'color', '#fff');
            this.render.setStyle(this.el.nativeElement, 'border-color', 'red');
        }
    }
}