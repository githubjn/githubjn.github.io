import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  title = "Services";

  constructor(
    private titleService: Title


  ) { }

  ngOnInit(): void {
    this.titleService.setTitle( this.title );
  }

}
