import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { Icomuni } from '../interfaces/icomuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
    
  urlAPI = environment.urlAPI + 'api/comuni?page=0&size=20&sort=id,ASC';
  urlAPI2 = environment.urlAPI + 'api/comuni/';

  constructor(private http: HttpClient) { }
  getAllComuni(){
    // return this.http.get(this.urlAPI, {headers: this.headers});
    return this.http.get<Icomuni>(this.urlAPI);
   }
}
