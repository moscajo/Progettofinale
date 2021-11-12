import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from '../clienti.service';
import { Content } from '../interfaces/content';
import { ContentFatture } from '../interfaces/content-fatture';

import { Fatture } from '../interfaces/fatture';
import { New } from '../interfaces/new';
import { StatoFattura } from '../interfaces/stato-fattura';
import { FattureService } from '../service/fatture.service';
import { NewfatturaService } from '../service/newfattura.service';

@Component({
  selector: 'app-editfattura',
  templateUrl: './editfattura.component.html',
  styleUrls: ['./editfattura.component.css']
})
export class EditfatturaComponent implements OnInit {
  title: string = "";
  newFattura: New = {
    
    data:"2019-07-31T16:09:43.763+00:00",
    numero: 1,
    anno: 1,
    importo: "",
    stato:{
      id: 1,
      nome: ""
  },
  cliente: {
    id:1
  }
  }
  clienti!: ContentFatture  ;
  tipiFatture: StatoFattura[] = [] ;
  userEdit: boolean = true ;
  

  constructor(private newfatturaService:  NewfatturaService,
    private fattureService: FattureService,
    private router: Router,
    private route: ActivatedRoute,
    private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (!element.id){
        this.title = "Nuovo Fattura";
        
        
      }else {
        this.title = "Edit";
        this.fattureService.getFattureId(element.id).subscribe(response  =>  {this.newFattura = response; console.log(response); this.userEdit = false} )          
        
      }
    })
   
    this.getAllStato();

    this.clientiService.getAllClienti().subscribe(response => this.clienti = response)
  }
  getAllStato(){
    this.newfatturaService.getAllStato().subscribe(response => this.tipiFatture = response.content);
  }
  
  saveFattura(){
      console.log(this.newFattura) 
    this.route.params.subscribe(element => {
      if(!element.id){ 
        
        this.fattureService.createFattura(this.newFattura).subscribe(response => {
          console.log(response);
          this.router.navigate(['clienti/list'])
        })
      } else {
        this.fattureService.updateFattura(this.newFattura).subscribe(response => {
          console.log(response);
          this.router.navigate(['clienti/list'])
        })
      }
    })
  }
}

