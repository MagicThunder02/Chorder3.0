import { ApplicationRef, Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { Metronome, } from './metronome.model';
import { ShowMetronomePage } from './show/show-metronome.page';
import * as Tone from "tone";
import { MetronomeModalComponent } from 'src/app/components/modals/metronome-modal/metronome-modal.component';
// import { InfoModalComponent } from '../infoModals/chordmaker-info.component';


@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.page.html',
  styleUrls: ['./metronome.page.scss'],
})

export class MetronomePage implements OnInit {

  public metronome: Metronome
  public sliderValue: number = 120;
  public increase: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private applicationRef: ApplicationRef,
    private platform: Platform
  ) {

  }

  ionViewDidEnter() {
    this.metronome = new Metronome(this.applicationRef, this.platform);
  }

  ngOnInit() {

  }

  async openMetroModal() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: MetronomeModalComponent,
      cssClass: 'fullscreen'
    });

    modal.onDidDismiss().then((result: any) => { });

    await modal.present();
  }

  async openShowMetronomeModal() {
    //audiocontext resume
    Tone.start();

    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ShowMetronomePage,
      componentProps: { metronome: this.metronome },
      cssClass: 'fullscreen'
    });

    modal.onDidDismiss().then((result: any) => { });

    await modal.present();
  }
}