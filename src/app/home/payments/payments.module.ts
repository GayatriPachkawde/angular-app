import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsPageRoutingModule } from './payments-routing.module';

import { PaymentsPage } from './payments.page';
import { HeaderComponent } from '../shared/header/header.component';
import { HomePageModule } from '../home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsPageRoutingModule,
    HomePageModule
  ],
  declarations: [PaymentsPage]
})
export class PaymentsPageModule {}
