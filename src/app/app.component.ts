import { Component,  } from '@angular/core';
import { countryData } from '../assets/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-data';
  data: Object[] = [];
  tooltipCountry: string = '';

  ngOnInit() {
    this.handleCountryData();
  }

  handleCountryData() {
    countryData.forEach(country => {
      const newData = {
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
  }

  handleTooltip(country: string) {
    this.tooltipCountry = country;
    console.log("Tooltip Country:", country);
  }
}
