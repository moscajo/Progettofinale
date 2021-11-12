import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientiService } from '../clienti.service';
import { Clienti } from '../interfaces/clienti';
import { Content } from '../interfaces/content';
import { Icomuni } from '../interfaces/icomuni';
import { IProvince } from '../interfaces/iprovince';
import { ComuniService } from '../service/comuni.service';
import { ProvinceService } from '../service/province.service';
import { TipiClientiService } from '../service/tipiclienti.service';

@Component({
  selector: 'app-form-clienti',
  templateUrl: './form-clienti.component.html',
  styleUrls: ['./form-clienti.component.css']
})
export class FormClientiComponent implements OnInit {
  title: string = "";
  editClient: Clienti = {
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
            id: 1,
            nome: "",
            provincia: {
              id: 1,
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
            id: 1,
            nome: "",
            provincia: {
                id: 1,
                nome: "",
                sigla: ""
            }
        }
    },
    dataInserimento: "2019-06-01T08:11:01.911+00:00",
    dataUltimoContatto: "2021-03-24T21:32:06.375+00:00"
}

tipiclienti = [];
comuni: Icomuni[] = [];
province: IProvince[]=[];
  
constructor(private clientiService: ClientiService,
  private comuniService : ComuniService,
  private provinceService: ProvinceService,  
  private route: ActivatedRoute,
  private router: Router,
  private tipiClientiService: TipiClientiService,) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (!element.id){
        this.title = "Nuovo Cliente";
        
        
      }else {
        this.title = "Edit";
        this.clientiService.getClient(element.id).subscribe(client  => this.editClient = client)          
        
      }
    })
    this.getAllTipiClienti();
    this.getComuni();
    this.getProvince();
    
  }
  getComuni(){
     this.comuniService.getAllComuni().subscribe(response => this.comuni = response.content);
  }
  getProvince(){
    this.provinceService.getAllProvince().subscribe(response => this.province = response.content);
  }
  getAllTipiClienti(){
    this.tipiClientiService.getAllTipiClienti().subscribe(response => this.tipiclienti = response);
  }
  saveClient(){
   
    this.route.params.subscribe(element => {
      if(!element.id){ 
        
        this.clientiService.createClient(this.editClient).subscribe(response => {
          console.log(response);
          this.router.navigate(['clienti/list'])
        })
      } else {
        this.clientiService.updateClient(this.editClient).subscribe(response => {
          console.log(response);
          this.router.navigate(['clienti/list'])
        })
      }
    })
  }

}
