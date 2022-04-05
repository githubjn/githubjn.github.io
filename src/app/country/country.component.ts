import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  title = 'Country Page'

  constructor(
    private titleService:Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }


}
