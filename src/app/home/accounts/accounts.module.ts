import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsPageRoutingModule } from './accounts-routing.module';

import { AccountsPage } from './accounts.page';
import { HomePageModule } from '../home.module';
import { AccountsGroupComponent } from './accounts-group/accounts-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountsPageRoutingModule,
    HomePageModule
  ],
  declarations: [AccountsPage, AccountsGroupComponent]
})
export class AccountsPageModule {}
