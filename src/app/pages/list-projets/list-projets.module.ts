
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ListProjetsComponent} from './list-projets.component';

import {HttpClientModule} from '@angular/common/http';
import { UpdateProjetComponent } from './update-projet/update-projet.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,

  ],
  declarations: [
    ListProjetsComponent,
    UpdateProjetComponent,
  ],
})
export class ListProjetsModule { }
