import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/services/global.service';
import { ChorderChord } from '../../chord/chord.model';

@Component({
  selector: 'app-notefinder-modal',
  templateUrl: './notefinder-modal.component.html',
  styleUrls: ['./notefinder-modal.component.scss'],
})
export class NotefinderModalComponent implements OnInit {

  public chord: ChorderChord;

  constructor(
    private modalController: ModalController,
    public translate: TranslateService,
    public global: GlobalService,
  ) {
  }

  ngOnInit() {
    this.chord = new ChorderChord("C9")
    this.chord.show = true;
    this.chord.disabled = true;
    console.log(this.chord)
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

}
