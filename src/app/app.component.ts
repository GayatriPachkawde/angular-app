import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuData = [{
    title: 'Notifications',
    data: 'Manage your account notifications',
    name: 'notifications-outline'
  },
  {
    title: 'Alert Settings',
    data: 'Manage your account notifications',
    name: 'alert-outline'
  },
  {
    title: 'Financial Tools',
    data: 'Financial Tools',
    name: 'cash-outline'
  },
  {
    title: 'Statements',
    data: 'View Statements',
    name: 'book-outline'
  },
  {
    title: 'User ID and Password',
    data: 'Update UserID and Password',
    name: 'key-outline'
  },
  {
    title: 'Accounts and Membership',
    data: 'Update account details',
    name: 'id-card-outline'
  },
  {
    title: 'Roung Up to Saving',
    data: 'Round up your saving',
    name: 'person-outline'
  }
 ]
  constructor(private authService: AuthService, private router: Router, private menuCtrl: MenuController, private alertCtrl: AlertController) { }

   async logoutClicked() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you want to log out?',
      buttons: [{
        text: 'Cancel',
        role: 'Cancel'
      }, {
        text: 'Ok',
        handler: () => {
          this.authService.logout();
          this.router.navigateByUrl("/auth");
          this.closeMenu();
        }
      }]
    });

    await alert.present();


  }

  closeMenu() {
     this.menuCtrl.close('m1')
  }
}
