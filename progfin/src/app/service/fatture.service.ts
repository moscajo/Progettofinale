import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContentFatture } from '../interfaces/content-fatture';
import { Fatture } from '../interfaces/fatture';
import { New } from '../interfaces/new';

@Injectable({
  providedIn: 'root'
})
export class FattureService {
  urlFATT = environment.urlAPI + 'api/fatture?page=0&size=100&sort=id,DESC'
  urlAPI2 = environment.urlAPI + 'api/fatture/'
  urlAPI3 = environment.urlAPI + 'api/fatture/cliente/'

  constructor(private http: HttpClient) { }
  getAllFatture() {
    return this.http.get<ContentFatture>(this.urlFATT )
  }
  getFatture(id: number) {
    return this.http.get<ContentFatture>(this.urlAPI3 + id);
  }
  removeFatture(fatture: Fatture) {
    return this.http.delete(this.urlAPI3+ fatture.id);
  }
  getFattureId(id: number) {
    return this.http.get<Fatture>(this.urlAPI2 + id);
  }
  createFattura(clienti: New){
    return this.http.post<New>(this.urlAPI3, clienti);
  }
  updateFattura(fatture: New){
    return this.http.put(this.urlAPI2+fatture, fatture);
  }
}
