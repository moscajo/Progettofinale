import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';
import { MyHttpInterceptorInterceptor } from './my-http-interceptor.interceptor';
import { FormClientiComponent } from './form-clienti/form-clienti.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { LoginComponent } from './login/login.component';
import { DataFattureComponent } from './data-fatture/data-fatture.component';
import { EditfatturaComponent } from './editfattura/editfattura.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientiComponent,
    FattureComponent,
    FormClientiComponent,
    DetailClientComponent,
    LoginComponent,
    DataFattureComponent,
    EditfatturaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
 providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
