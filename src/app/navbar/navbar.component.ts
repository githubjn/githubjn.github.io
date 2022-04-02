import { Language } from './../models/language';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  langList = ['en','fr','ar', 'ru'];
  selectedLang = localStorage.getItem('lang') || 'en';  

  languages: any[] = [
    {"id": 1, "code":"en", "label": "english" },
    {"id": 2, "code":"fr", "label": "français" },
    {"id": 3, "code":"ar", "label": "عربي"  },
    {"id": 4, "code":"ru", "label": "русский" },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  selected($event: any){
    //console.log('language changed!', $event.target.value);
    localStorage.setItem('lang', $event.target.value);
    window.location.reload();
  }

}
