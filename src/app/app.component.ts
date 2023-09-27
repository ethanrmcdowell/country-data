import { Component, Inject } from '@angular/core';
import { countryData } from '../assets/countries';
import { CountryModalComponent } from './country-modal/country-modal.component'
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../models/country.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(public dialog: MatDialog) {}

  title = 'country-data';
  data: Country[] = [];
  tooltipCountry: string = '';
  clickedCountry: string = '';
  mapListToggle: string = 'map';
  subregionList: string[] = [];

  isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;

  ngOnInit() {
    this.handleCountryData();

    if (this.isMobile) {
      console.log("MOBILE PHONE!");
      this.mapListToggle = 'list';
    } else {
      console.log("NOT A MOBILE DEVICE!");
      this.mapListToggle = 'map';
    }
  }

  handleCountryData() {
    countryData.forEach(country => {
      if (country.subregion && !this.subregionList.includes(country.subregion)) {
        this.subregionList.push(country.subregion);
      }
      const newData: Country = {
        name: country.name,
        officialName: country.officialName,
        subregion: country.subregion,
        population: country.population,
        flag: country.flag,
        yellowFever: country.yellowFever,
        typhoid: country.typhoid,
        malaria: country.malaria,
        jEncephalitis: country.jEncephalitis,
        visaRequired: country.visaRequired,
        travelAdvisory: country.travelAdvisory,
      }

      this.data.push(newData);
    });
    this.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  mapToggle(value: string) {
    this.mapListToggle = value;
  }

  handleTooltip(country: string) {
    this.tooltipCountry = country;
  }

  handleClick(country: string) {
    this.clickedCountry = country;

    console.log("Clicked ", this.clickedCountry);

    let clickedData = this.data.find(country => {
      return country.name === this.clickedCountry || country.officialName === this.clickedCountry;
    });

    if (clickedData) {
      const dialogRef = this.dialog.open(CountryModalComponent, {
        data: clickedData,
        panelClass: "dialog-responsive",
        height: '400px',
        width: '600px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
