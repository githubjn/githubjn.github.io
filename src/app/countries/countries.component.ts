import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, throwError } from 'rxjs';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  title = "Countries List Page";
  countries: Observable <Country[]> | undefined;
  
  constructor(
    private titleService:Title
    , private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.showCountries();
  }

  showCountries(){
    this.countries = this.countryService.getCountries();
  }

}
