import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['./country-modal.component.css'],
  providers: [DecimalPipe],
})
export class CountryModalComponent {
  constructor(private decimalPipe: DecimalPipe, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log("Travel advisory rating: " + this.data.travelAdvisory);
  }

  getCdcLink() {
    let cdcLink = "https://wwwnc.cdc.gov/travel/destinations/traveler/none/" + this.data.name.replaceAll(' ', '-') + "#vaccines-and-medicines";
    return cdcLink;
  }

  getTravelAdvisory() {
    switch (this.data.travelAdvisory) {
      case 1:
        return 'Exercise normal precautions.';
        break;
      case 2:
        return 'Exercise increased caution.';
        break;
      case 3:
        return 'Reconsider travel.';
        break;
      case 4:
        return 'Do not travel.';
        break;
      default:
        return 'error!';
      }
  }
}
