import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentFatture } from '../interfaces/content-fatture';
import { Fatture } from '../interfaces/fatture';
import { FattureService } from '../service/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {
  
   detailFatture!: Fatture[];
 

  constructor(private fattureService: FattureService,
    private router: Router,
    private route: ActivatedRoute) { }
    private parametro: string =""

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.fattureService.getFatture(element.id).subscribe(response => this.detailFatture = response.content);
        this.parametro = element.id 
      }
    });
  }
  deleteFatture(item: Fatture) {
    this.fattureService.removeFatture(item).subscribe(response => {
      this.fattureService.getFatture(parseInt(this.parametro)).subscribe(response => this.detailFatture = response.content);
      console.log(response);
    })

  }

   dataFatture(item: Fatture) {
    this.router.navigate(['dataFatture', item.id])
   }

   selectFatture(item: Fatture) {
    this.router.navigate(['fatture', item.id, 'new'])
   }

  }

