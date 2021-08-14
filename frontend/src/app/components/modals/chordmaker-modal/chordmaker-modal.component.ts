import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/services/global.service';
import { ChorderChord } from '../../chord/chord.model';

@Component({
  selector: 'app-chordmaker-modal',
  templateUrl: './chordmaker-modal.component.html',
  styleUrls: ['./chordmaker-modal.component.scss'],
})
export class ChordmakerModalComponent implements OnInit {

  private chord: ChorderChord;

  constructor(
    private modalController: ModalController,
    public translate: TranslateService,
    public global: GlobalService,
  ) {
  }

  ngOnInit() {
    this.chord = new ChorderChord("C")
    this.chord.show = true;
    this.chord.disabled = true;
    console.log(this.chord)
  }

  async dismissModal() {
    await this.modalController.dismiss();
  }
}
