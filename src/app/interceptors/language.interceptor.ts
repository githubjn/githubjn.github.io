import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
 
@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

    constructor() {
    }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const lang = localStorage.getItem('lang' || 'en');
      req = req.clone({
        setHeaders:{
          'Accept-Language': (lang as string)
        }
      });
      console.log(req);
        return next.handle(req);
    }
}