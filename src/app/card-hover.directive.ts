import { Directive,
         ElementRef,
         Renderer,
         HostListener,
         HostBinding } from "@angular/core";

@Directive({
  selector: "[ccCardHover]"
})
export class CardHoverDirective {
  @HostBinding("class.card-outline-primary") private isHovering: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener("mouseover") onMouseOver() {
    const part = this.el.nativeElement.querySelector(".card-text");
    this.renderer.setElementStyle(part, "display", "block");
    this.isHovering = true;
  }

  @HostListener("mouseout") onMouseOut() {
    const part = this.el.nativeElement.querySelector(".card-text");
    this.renderer.setElementStyle(part, "display", "none");
    this.isHovering = false;
  }
}
