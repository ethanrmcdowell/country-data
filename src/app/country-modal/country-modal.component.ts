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
    console.log("hey, this thing work?");
    console.log(this.data);
  }

  getCdcLink() {
    let cdcLink = "https://wwwnc.cdc.gov/travel/destinations/traveler/none/" + this.data.name.replaceAll(' ', '-') + "#vaccines-and-medicines";
    return cdcLink;
  }
}
