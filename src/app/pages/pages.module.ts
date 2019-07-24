import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UserModule } from './user/user.module';
import { AddUserModule } from './add-user/add-user.module';
import { ProjetComponent } from './projet/projet.component';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { NbAlertModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    UserModule,
    AddUserModule,
    NbAlertModule,
    FormsModule,
    NbCheckboxModule,
    NbIconModule,
  ],
  declarations: [
    PagesComponent,
    ProjetComponent,
    TaskComponent,
    LoginComponent,
  ],
})
export class PagesModule {
}
