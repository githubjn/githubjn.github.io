import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { PostsComponent } from './posts/posts.component';
import { BooksComponent } from './books/books.component';
import { TempoComponent } from './tempo/tempo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { CountryComponent } from './country/country.component';
import { LanguageInterceptor } from './interceptors/language.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CountriesComponent } from './countries/countries.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { PdpComponent } from './pdp/pdp.component';
import { PlpComponent } from './plp/plp.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component'; 

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    PostsComponent,
    BooksComponent,
    TempoComponent,
    NavbarComponent,
    CountryComponent,
    CountriesComponent,
    FooterComponent,
    ServicesComponent,
    PdpComponent,
    PlpComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    GoogleAnalyticsService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: LanguageInterceptor, 
      multi: true 
    },
    HttpClient,
    Title,
    Meta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
