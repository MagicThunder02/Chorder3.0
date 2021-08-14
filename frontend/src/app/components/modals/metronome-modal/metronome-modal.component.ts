import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-metronome-modal',
  templateUrl: './metronome-modal.component.html',
  styleUrls: ['./metronome-modal.component.scss'],
})
export class MetronomeModalComponent implements OnInit {

  constructor(
    private modalController: ModalController,
    public translate: TranslateService,
    public global: GlobalService,
  ) {
  }

  ngOnInit() {

  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

}
