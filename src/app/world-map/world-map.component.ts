import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {
  @Output() mouseOverEvent = new EventEmitter<string>();
  @Output() clickEvent = new EventEmitter<string>();
  countryName: any = null;

  onMouseOver(event: MouseEvent): void {
    if (event.target instanceof SVGPathElement) {
      this.countryName = event.target.getAttribute("title");
      this.mouseOverEvent.emit(this.countryName);
    } else {
      this.countryName = " ";
      this.mouseOverEvent.emit(this.countryName);
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (this.countryName) {
      const tooltipSpan = document.getElementById('details-box');
      if (tooltipSpan) {
        tooltipSpan.style.top = event.clientY + 20 + 'px';
        tooltipSpan.style.left = event.clientX + 'px';
      }
    }
  }

  onMapClick(event: MouseEvent): void {
    if (event.target instanceof SVGPathElement) {
      this.countryName = event.target.getAttribute("title");
      this.clickEvent.emit(this.countryName);
    } else {
      this.countryName = " ";
      this.clickEvent.emit(this.countryName);
    }
  }
}
