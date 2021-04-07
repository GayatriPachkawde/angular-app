import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {Account} from '../account.model'
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  accountdetails;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private accountService: AccountsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has("accountId")) {
        this.navCtrl.navigateBack('/home/tabs/accounts');
        return;
      }

      this.accountdetails = this.accountService.getAccountDetail(paramMap.get('accountId'));
    })
  }

}
