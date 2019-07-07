
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {UserComponent} from './user.component';

import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,

    ],
    declarations: [
        UserComponent,
    ],
    providers: [
        UserService,
    ],
})
export class UserModule { }
