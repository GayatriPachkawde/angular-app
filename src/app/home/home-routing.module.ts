import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'accounts',
        children: [
          {
            path: '',
            loadChildren: () => import('./accounts/accounts.module').then( m => m.AccountsPageModule)
          },
          {
            path: ":accountId",
            loadChildren: () => import('./accounts/account-detail/account-detail.module').then( m => m.AccountDetailPageModule)
          }
        ]
      },
      {
        path: 'payments',
        loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
      },
      {
        path: 'check',
        loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/tabs/dashboard'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/dashboard'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
