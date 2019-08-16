
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ListProjetsComponent} from './list-projets.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,

  ],
  declarations: [
    ListProjetsComponent,
  ],
})
export class ListProjetsModule { }
