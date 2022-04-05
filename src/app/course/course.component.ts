import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = "Testimonials";

  constructor(
    private titleService:Title
  ) {    

  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }


}
