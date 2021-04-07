import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sneak-peek',
  templateUrl: './sneak-peek.component.html',
  styleUrls: ['./sneak-peek.component.scss'],
})
export class SneakPeekComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeBalanceModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
