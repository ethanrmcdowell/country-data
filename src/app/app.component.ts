import { Component, Inject } from '@angular/core';
import { countryData } from '../assets/countries';
import { CountryModalComponent } from './country-modal/country-modal.component'
import { MatDialog } from '@angular/material/dialog';

interface Country {
  name: string;
  officialName: string;
  subregion: any;
  language: any;
  population: any;
  currency: any;
  flag: any;
  coat: any;
}

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

  ngOnInit() {
    this.handleCountryData();
  }

  handleCountryData() {
    countryData.forEach(country => {
      const newData: Country = {
        name: country.name.common,
        officialName: country.name.official,
        subregion: country.subregion,
        language: country.languages,
        population: country.population,
        currency: country.currencies,
        flag: country.flags.png,
        coat: country.coatOfArms.png,
      }
      this.data.push(newData);
    });
    console.log("UPDATED COUNTRY DATA:", this.data);
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
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}
