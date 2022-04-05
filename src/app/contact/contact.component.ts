import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = "Contact";

  constructor(
    private titleService: Title  
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
