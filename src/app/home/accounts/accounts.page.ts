import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import {Account} from './account.model'
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {
  checkingAccounts: Account[];
  savingsAccounts: Account[];
  creditCardAccounts: Account[];
  loanAccounts: Account[];


  constructor(private accountService: AccountsService,
              private actionSheetCtrl: ActionSheetController) {
  }

  ngOnInit() {
    this.checkingAccounts =  this.accountService.getCheckingAccounts();
    this.savingsAccounts = this.accountService.getSavingsAccount();
    this.creditCardAccounts = this.accountService.getCreditCardAccount();
    this.loanAccounts = this.accountService.getLoanAccounts();
  }

  showFilterOptions() {
    this.actionSheetCtrl.create({
      header: 'Choose a filter',
      buttons: [
        {
          text: 'Checking Accounts',
          role: 'checkbox'
        },
        {
          text: 'Savings Accounts'
        },
        {
          text: 'Credit card accounts'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    })
  }



}
