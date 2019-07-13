
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {AddUserComponent} from './add-user.component';
import {UserService} from '../user/user.service';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,

    ],
    declarations: [
      AddUserComponent,
    ],
    providers: [
      UserService,
    ],
})
export class AddUserModule { }
