import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, ModalController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { SneakPeekComponent } from './sneak-peek/sneak-peek.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @ViewChild('usernameCtrl') usernameRef;
  @ViewChild('passwordCtrl') passwordRef;
  @ViewChild('rememberCtrl') rememberRef;
  username:string;

  rememberUser = false;
  showusernameWarning = false;
  showpasswordWarning = false;
  constructor(private authService: AuthService, private router: Router, private alrtCtrl: AlertController, private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    if(localStorage.getItem('username')) {
      this.rememberUser = true;
      this.username = localStorage.getItem('username');
    }
  }



  async submitForm(form: NgForm) {
    if(!this.usernameRef.valid || !this.passwordRef.valid) {
      if(!this.usernameRef.valid) {
        this.showusernameWarning = true;
     }
     if(!this.passwordRef.valid) {
       this.showpasswordWarning = true;
     }

     return;
    }

    if(form.value.username === 'machugas' && form.value.password === 'Testing!2') {
      this.authService.login();
      this.loadingCtrl.create({
        keyboardClose: true, message: 'Processing...'
      }).then(loadingEL => {
        loadingEL.present();
        setTimeout(() => {
          loadingEL.dismiss();
          this.router.navigateByUrl('/home/tags/dashboard')
        }, 1500)
      })

      if(this.rememberRef.checked) {
        localStorage.setItem('username', form.value.username);
      }
    } else {
      const alert = await this.alrtCtrl.create({
        header: 'Alert',
        message: 'Your Username and Password did not match our records. Please try again.',
        buttons: ["OK"]
      });

      await alert.present();
     }
  }

  showAccountBalance() {
      this.modalCtrl.create({
        component: SneakPeekComponent
      }).then(modalEl => {
        modalEl.present()
      })
  }



}
