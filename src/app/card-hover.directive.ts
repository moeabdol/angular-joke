import { Directive,
         ElementRef,
         Renderer,
         HostListener,
         HostBinding,
         Input } from "@angular/core";

@Directive({
  selector: "[ccCardHover]"
})
export class CardHoverDirective {
  @HostBinding("class.card-outline-primary") private isHovering: boolean;
  @Input("ccCardHover") config: Object = {
    querySelector: ".card-text"
  };

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener("mouseover") onMouseOver() {
    const part = this.el.nativeElement.querySelector(
      this.config["querySelector"]);
    this.renderer.setElementStyle(part, "display", "block");
    this.isHovering = true;
  }

  @HostListener("mouseout") onMouseOut() {
    const part = this.el.nativeElement.querySelector(
      this.config["querySelector"]);
    this.renderer.setElementStyle(part, "display", "none");
    this.isHovering = false;
  }
}
