import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { DataFattureComponent } from './data-fatture/data-fatture.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { EditfatturaComponent } from './editfattura/editfattura.component';
import { FattureComponent } from './fatture/fatture.component';
import { FormClientiComponent } from './form-clienti/form-clienti.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'clienti/list',
    component: ClientiComponent
  },
  {
    path: 'clienti/new',
    component: FormClientiComponent
  },
  { 
    path: 'dettagliocliente/:id',
    component: DetailClientComponent,
    
  },
  {
    path: 'dettagliocliente/:id/edit',
    component: FormClientiComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'clienti/:id/fatture',
    component: FattureComponent,
    
  },
  { 
    path: 'dataFatture/:id',
    component: DataFattureComponent,
    
  },
  {
    path: 'fatture/new',
    component: EditfatturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
