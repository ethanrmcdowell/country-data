import { Component,  } from '@angular/core';
import { Task } from './task/task';
import { countryData } from '../assets/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-data';
  data: Object[] = [];

  ngOnInit() {
    // console.log("countries:", countryData);

    countryData.forEach(country => {
      // if (country.name.common == 'United States') {
      //   console.log("&&&&& USA &&&&&");
      //   console.log(country);
      // }

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
    console.log("updated data:", this.data);
  }
}
