import { Meta, Title } from '@angular/platform-browser';
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

  title = "Our Team";
  courses: any;
  
  constructor(
    private service: CoursesService
    , private titleService: Title
    , private metaService: Meta
    , public googleAnalyticsService: GoogleAnalyticsService
    ) {  }

  ngOnInit(): void {
    this.titleService.setTitle( this.title );
    //this.addTags();
    this.courses = this.service.getCourses();
    //console.log("tags = ", this.addTags());
    this.metaService.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});
    this.metaService.addTag({name: 'description', content: 'Angular app training angapp'});
    this.metaService.addTag({name: 'author', content: 'jmc'});
    this.metaService.addTag({name: 'robots', content: 'index, follow'});
  }

  SendAddToCartEvent(){ 
    //....
    this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 10);
    console.log("cartEvent");
  } 

  addTags() {
    this.metaService.addTags([
      { name: 'description', content: 'Article Description' },
      { name: 'robots', content: 'index,follow' },
      { name: "viewport", content: "width=device-width, initial-scale=2" },
      { property: 'og:title', content: 'Content Title for social media' }
   ]);
 }

}
