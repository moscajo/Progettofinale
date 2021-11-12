import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Clienti } from './interfaces/clienti';
import { Content } from './interfaces/content';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {


  urlAPI = environment.urlAPI + 'api/clienti?size=1000&sort=id,ASC';
  urlAPI2 = environment.urlAPI + 'api/clienti/';
  urlAPI3 = environment.urlAPI + 'api/clienti';
  /*bearerAuth= "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTY2NiwiZXhwIjoxNjM3MjQzNjY2fQ.xuyZR-3mxC-0dcWuEfrx8mdRAbwx__kZ2SvdsdMYv6gfX51t-LCRi33bSgi06aT0QmdFwauJVLDRglGGw6PzOQ";
  tenantID= "fe_0421";
  headers = new HttpHeaders();*/


  constructor(private http: HttpClient) {
    /* this.headers = this.headers
    .set("Authorization", "Bearer " + this.bearerAuth)
    .set("X-TENANT-ID", this.tenantID); */
   }

  getAllClienti(){
   // return this.http.get(this.urlAPI, {headers: this.headers});
   return this.http.get<Content>(this.urlAPI);
  }
  removeClienti(clienti: Clienti) {
    return this.http.delete(this.urlAPI2+clienti.id);
  }
  getClient(id: any){
    return this.http.get<any>(this.urlAPI2+id);
  }
  updateClient(clienti: Clienti){
    return this.http.put(this.urlAPI2+clienti.id, clienti);
  }

  createClient(clienti: Clienti){
    return this.http.post<Clienti>(this.urlAPI3, clienti);
  }

}
