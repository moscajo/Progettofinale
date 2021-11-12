import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipiClientiService {

  // urlAPI = environment.urlAPI + 'api/province?page=0&size=20&sort=id,ASC';
  urlAPI2 = environment.urlAPI + '/api/statifattura/';

  constructor(private http: HttpClient) { }

  getAllTipiClienti(){
    return this.http.get<[]>(this.urlAPI2);
  }
}