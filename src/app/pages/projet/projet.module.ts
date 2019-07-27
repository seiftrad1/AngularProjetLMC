
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ProjetComponent} from './projet.component';

import {HttpClientModule} from '@angular/common/http';
import {ProjetService} from './projet.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,

  ],
  declarations: [
    ProjetComponent,
  ],
  providers: [
    ProjetService,
  ],
})
export class ProjetModule { }
