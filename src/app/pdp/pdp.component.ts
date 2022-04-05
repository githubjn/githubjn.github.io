import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {

  title = "Product Page";

  constructor(
    private titleService:Title
  
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    }

}
