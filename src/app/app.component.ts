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
  data: Object[] = countryData;

  ngOnInit() {
    this.logData();
  }

  logData() {
    console.log("COUNTRY DATA:", this.data);
  }
}
