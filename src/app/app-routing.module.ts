import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { TempoComponent } from './tempo/tempo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksComponent } from './books/books.component';
import { PostsComponent } from './posts/posts.component';
import { CountryComponent } from './country/country.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: '', component: TempoComponent },
  //{ path: 'courses/:name', component: CourseComponent}
  { path: 'courses', component: CoursesComponent },
  { path: 'course', component: CourseComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'country', component: CountryComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'removedPage',   redirectTo: '/books', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
