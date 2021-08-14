import { Component, OnInit } from '@angular/core';

import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Metronome } from '../metronome.model';

@Component({
  selector: 'app-show-metronome',
  templateUrl: './show-metronome.page.html',
  styleUrls: ['./show-metronome.page.scss'],
})
export class ShowMetronomePage implements OnInit {

  public metronome: Metronome | any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private platform: Platform
  ) {
  }

  ionViewDidEnter() {

    this.metronome = this.navParams.get('metronome');

    this.platform.resize.subscribe(async () => {

      this.metronome.inizializeDrawings();
    });

  }

  log(event) {
    console.log('x:', event.clientX, 'y:', event.clientY)
  }

  ngOnInit() {

  }

  async closeModal() {
    await this.modalController.dismiss();
  }
}
