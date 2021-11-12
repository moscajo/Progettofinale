import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewfatturaService {
  urlNew = environment.urlAPI + 'api/statifattura?page=0&size=20&sort=id,ASC'

  constructor(private http: HttpClient) { }
  getAllStato(){
    return this.http.get<[]>(this.urlNew);
  }
}
