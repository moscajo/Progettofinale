import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import {IProvince} from '../interfaces/iprovince';


@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
   
  urlAPI = environment.urlAPI + 'api/province?page=0&size=20&sort=id,ASC';
  urlAPI2 = environment.urlAPI + 'api/province/';

  constructor(private http: HttpClient) { }
  getAllProvince(){
    // return this.http.get(this.urlAPI, {headers: this.headers});
    return this.http.get<IProvince>(this.urlAPI);
   }
}
