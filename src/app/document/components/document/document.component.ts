import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  isActive = false;

  @Input() title: string;
  @Input() file: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isActive = true;
  }

  @HostListener('mouseleave')
  onMouseLeaver() {
    this.isActive = false;
  }
}
