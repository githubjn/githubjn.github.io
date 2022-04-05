import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PlpComponent implements OnInit {

  title = "Product List Page";

  constructor(
    private titleService:Title
  
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    }

}
