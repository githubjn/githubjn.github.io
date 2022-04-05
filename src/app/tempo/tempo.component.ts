import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'tempo',
  templateUrl: './tempo.component.html',
  styleUrls: ['./tempo.component.css']
})
export class TempoComponent implements OnInit {

  title = 'Home page';
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;

  constructor(
    private titleService:Title
  ) {
    this.reset();
   }

  ngOnInit(): void { 
    this.titleService.setTitle(this.title)
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!(' hi there!');
      this.arrived = true;
    }
  }

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(
      () => observer.next(new Date().toString()), 
      1000
      );
  });

}
