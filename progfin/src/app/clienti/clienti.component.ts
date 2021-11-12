import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientiService } from '../clienti.service';
import { Clienti } from '../interfaces/clienti';
import { Content } from '../interfaces/content';
import { ContentFatture } from '../interfaces/content-fatture';
import { Fatture } from '../interfaces/fatture';


@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {
   
  clienti!: Content  ;


  constructor(private clientiService: ClientiService, 
    private router: Router) { }
    

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(response => this.clienti = response)
  }
  deleteClienti(item: Clienti) {
    this.clientiService.removeClienti(item).subscribe(response => {
      this.clientiService.getAllClienti().subscribe(response => this.clienti = response)
    })
  }

   detailClienti(item: Clienti) {
    this.router.navigate(['dettagliocliente', item.id])
   }

  selectClienti(item: Clienti) {
    this.router.navigate(['dettagliocliente', item.id, 'edit'])
   }
   fattureClienti(item: Clienti) {
    this.router.navigate(['clienti', item.id, 'fatture'])
   }


}
