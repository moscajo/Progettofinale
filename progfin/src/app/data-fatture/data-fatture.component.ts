import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ContentFatture } from '../interfaces/content-fatture';
import { Fatture } from '../interfaces/fatture';
import { FattureService } from '../service/fatture.service';

@Component({
  selector: 'app-data-fatture',
  templateUrl: './data-fatture.component.html',
  styleUrls: ['./data-fatture.component.css']
})
export class DataFattureComponent implements OnInit {
   dataFatture : Fatture = { 
     id: 217,
   data: "",
   numero: 16,
   anno: 2019,
   importo: "",
  stato: {
       id: 1,
       nome: ""
   },
   cliente: {
       id: 3,
       ragioneSociale: "",
      partitaIva: "",
       tipoCliente: "",
       email: "",
       pec: "",
       telefono: "",
       nomeContatto: "",
       cognomeContatto: "",
       telefonoContatto: "",
       emailContatto: "",
       indirizzoSedeOperativa: {
           id: 2,
           via: "",
           civico: "",
           cap: "",
           localita: "",
           comune: {
               id: 46,
               nome: "",
               provincia: {
                   id: 15,
                   nome: "",
                   sigla: ""
               }
           }
       },
       indirizzoSedeLegale: {
           id: 1,
           via: "",
           civico: "",
           cap: "",
           localita: "",
           comune: {
               id: 35,
               nome: "",
               provincia: {
                   id: 11,
                   nome: "",
                  sigla: ""
               }
           }
       },
       dataInserimento: "",
       dataUltimoContatto: "",
       fatturatoAnnuale: ""
   }

     
   }
  
  

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fattureService: FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.fattureService.getFattureId(element.id).subscribe(client => this.dataFatture = client);
      }
    });
  }

}