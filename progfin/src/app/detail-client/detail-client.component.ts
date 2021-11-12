import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../clienti.service';
import { Clienti } from '../interfaces/clienti';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  detailClient: Clienti = {
    
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
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
       
        nome: "",
        provincia: {
          
          nome: "",
          sigla: ""
        }
      }
    },
    indirizzoSedeLegale: {
      via: "",
      civico: "",
      cap: "",
      localita: "",
      comune: {
       
        nome: "",
        provincia: {
          
          nome: "",
          sigla: ""
        }
      }
    },
    dataInserimento: "",
    dataUltimoContatto: ""
  }


  constructor(private ClientiService: ClientiService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.ClientiService.getClient(element.id).subscribe(client => this.detailClient = client);
      }
    });
  }

}


