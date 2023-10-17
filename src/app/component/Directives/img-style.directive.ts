import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ImgStyle]'
})
export class ImgStyleDirective implements OnChanges{
  // property decoator
  @Input( 'property1') property1: string = '250px';
  @Input('property2') property2: string = '10px';
  @Input() boxShadow1: string = '3px 3px 12px #888888';
  @Input() boxShadow2: string = '3px 3px 6px #000000';

  // ElementRef   refer to DOM 
  constructor(private elementRef : ElementRef ) {
    // this.elementRef.nativeElement.style.border = '3px solid blue' ;
    // this.elementRef.nativeElement.style.borderRadius = this.property1 ;
    
    this.elementRef.nativeElement.style.borderRadius = this.property2 ; 
    // this.elementRef.nativeElement.style.boxShadow = this.boxShadow2 ;
 
  }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    // this.elementRef.nativeElement.style.borderRadius = this.property2 ; 
    
    this.elementRef.nativeElement.style.borderRadius = this.property2 ; 
    // this.elementRef.nativeElement.style.boxShadow = this.boxShadow2 ;

  }
  // method decorator
  @HostListener('mouseover') fun(){
    // this.elementRef.nativeElement.style.border = '3px dashed orange' ;
    // this.elementRef.nativeElement.style.borderRadius = this.property1 ; 
  
    this.elementRef.nativeElement.style.borderRadius = this.property1 ; 
    // this.elementRef.nativeElement.style.boxShadow = this.boxShadow1 ;

  }
  @HostListener('mouseout') fun2(){
    // this.elementRef.nativeElement.style.border = '3px solid blue' ;
    // this.elementRef.nativeElement.style.borderRadius = this.property2;
    
    this.elementRef.nativeElement.style.borderRadius = this.property2 ; 
    // this.elementRef.nativeElement.style.boxShadow = this.boxShadow2 ;
  }
}
