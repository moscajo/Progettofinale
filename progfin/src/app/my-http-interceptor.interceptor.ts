import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {

  bearerAuth= "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTY2NiwiZXhwIjoxNjM3MjQzNjY2fQ.xuyZR-3mxC-0dcWuEfrx8mdRAbwx__kZ2SvdsdMYv6gfX51t-LCRi33bSgi06aT0QmdFwauJVLDRglGGw6PzOQ";
  tenantID= "fe_0421";

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone({headers: request.headers.set("Authorization", "Bearer " + this.bearerAuth)
    .set("X-TENANT-ID", this.tenantID)})
    return next.handle(myRequest);
  }
}