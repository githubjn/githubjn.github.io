import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  title = "Pricing Page";

  constructor(
    private titleService:Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    }

}
