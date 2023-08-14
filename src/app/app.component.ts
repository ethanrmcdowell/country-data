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

  ngOnInit() {
    this.handleCountryData();
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
      }

      this.data.push(newData);
    });
    // console.log("UPDATED COUNTRY DATA:", this.data);
    // console.log("SUBREGION LIST:", this.subregionList);
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
