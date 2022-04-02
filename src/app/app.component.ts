import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angapp-to test deploy-JMC.';


  constructor(
              private router: Router
             ,private translateService: TranslateService
              ) {

    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      
      /** START : Code to Track Page View  */
       gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
       })
      /** END */
    });

    this.translateService.setDefaultLang('en');
    this.translateService.use( localStorage.getItem('lang') || 'en' );

    const lang = localStorage.getItem('lang') || 'en';
    document.documentElement.lang = lang;

  }

}

