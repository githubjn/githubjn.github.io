// import { GoogleAnalyticsService } from './../services/services/google-analytics.service';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../services/google-analytics.service';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  title = "List of courses";
  courses: any;
  
  constructor(
    private service: CoursesService,
    public googleAnalyticsService: GoogleAnalyticsService
    ) { 
      }

  ngOnInit(): void {
    this.courses = this.service.getCourses();
    }

  SendAddToCartEvent(){ 
    //....
    this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 10);
    console.log("cartEvent")
  } 

}
