import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../account.model'

@Component({
  selector: 'app-accounts-group',
  templateUrl: './accounts-group.component.html',
  styleUrls: ['./accounts-group.component.scss'],
})
export class AccountsGroupComponent implements OnInit {
  @Input() accounts: Account[];
  constructor() { }

  ngOnInit() {}

}
