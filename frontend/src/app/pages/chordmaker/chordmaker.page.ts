import { Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { Chord, Interval } from "@tonaljs/tonal";
import * as Tone from 'tone';
import { MusicNotationPipe } from 'src/app/pipes/music-notation.pipe';
import { GlobalService } from 'src/app/services/global.service';
import { ModalController } from '@ionic/angular';
import { ChordmakerModalComponent } from 'src/app/components/modals/chordmaker-modal/chordmaker-modal.component';
import { ChorderChord } from 'src/app/components/chord/chord.model';

// import * as SampleLibrary from 'tjss.js';


export interface Tile {
  name: string;
  color?: string;
  selected?: boolean;
}


@Component({
  selector: 'app-chordmaker',
  templateUrl: './chordmaker.page.html',
  styleUrls: ['./chordmaker.page.scss'],
})
export class ChordmakerPage implements OnInit {

  private musicNotationPipe = new MusicNotationPipe(this.global);
  private translatePipe = new TranslatePipe(this.translate, null);

  public tiles: Tile[] = [];
  public selectedTiles: Tile[] = [];
  public chord: ChorderChord = new ChorderChord();


  constructor(
    private translate: TranslateService,
    public global: GlobalService,
    private modalCtrl: ModalController
  ) {

  }

  resetTiles() {
    this.selectedTiles = [];
    this.colorTiles();
    this.chord = new ChorderChord()
  }

  selectTile(tile: Tile) {
    this.toggleTile(tile)
    this.checkEquals(tile)
    this.colorTiles()
    this.findChord()
  }

  //select or deselect a tile
  toggleTile(tile: Tile) {
    if (this.selectedTiles.includes(tile)) {
      this.selectedTiles.splice(this.selectedTiles.indexOf(tile), 1);
    }
    else {
      this.selectedTiles.push(tile);
    }

    if (tile.selected == false) {
      tile.selected = true;
    } else {
      tile.selected = false;
    }
  }

  //check if two note with the same value are both checked, if yes deselects the last selected one
  checkEquals(selectedTile: Tile) {

    this.selectedTiles.forEach((tile) => {

      //if the interval is 0 
      let interval = Interval.distance(selectedTile.name, tile.name);
      if (interval == "0A" || interval == "2d") {
        tile.selected = false
        this.selectedTiles.splice(this.selectedTiles.indexOf(tile), 1);
      }
    });

  }

  //color the tiles if selected
  colorTiles() {

    this.tiles.forEach(tile => {
      tile.color = "light";
    })

    this.selectedTiles.forEach((selectedTile, idx) => {
      let found = this.tiles.find(tile => {
        return tile.name == selectedTile.name;
      })

      if (idx == 0) {
        found.color = "tertiary";
      }
      else {
        found.color = "secondary";
      }

    })
  }

  findChord() {
    let filter: string;

    //il filtro è la prima nota premuta
    if (this.selectedTiles[0]) {
      filter = this.selectedTiles[0].name;
    }

    let notes: string[] = this.selectedTiles.map(tile => {
      return tile.name;
    });


    if (notes.length >= 2) {
      let chordsList = Chord.detect(notes);

      let filteredChord = chordsList.find(chordName => {
        return chordName.slice(0, 2).includes(filter);
      })

      this.chord = new ChorderChord(filteredChord);
      this.chord.show = true;
      this.chord.disabled = false;

      console.log(this.chord)
    }
    else {
      this.chord.empty = true;
    }

  }

  inputChord(chordName) {

    this.chord = new ChorderChord(chordName);
    this.chord.show = true;
    this.chord.disabled = false;

    this.selectedTiles = [];
    this.chord.notes.forEach(note => {
      this.selectedTiles.push({ name: note, color: "light" })
    })

    this.colorTiles();

    console.log(chordName, this.chord)
  }


  ngOnInit() {
    let scale = ["Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"]
    scale.forEach((note, idx) => {
      this.tiles.push({ name: note, color: "light", selected: false })
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ChordmakerModalComponent,
      cssClass: 'fullscreen'
    })

    return await modal.present();
  }

}
