import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChordType } from "@tonaljs/tonal";
import { GlobalService } from 'src/app/services/global.service';
import { MusicNotationPipe } from 'src/app/pipes/music-notation.pipe';
import { ModalController } from '@ionic/angular';
import { ChorderChord } from 'src/app/components/chord/chord.model';
import { NotefinderModalComponent } from 'src/app/components/modals/notefinder-modal/notefinder-modal.component';


export interface Tile {
  name?: string;
  color: string;
  selected?: boolean;
}

@Component({
  selector: 'app-notefinder',
  templateUrl: 'notefinder.page.html',
  styleUrls: ['notefinder.page.scss']
})

export class NotefinderPage implements OnInit {
  private musicNotationPipe = new MusicNotationPipe(this.global);

  public scale: string[] = [];
  public qualitiesTiles: Tile[] = [];
  public gradesTiles: Tile[] = [];
  public key: string = '';
  public chords: ChorderChord[] = [];
  private serVal: string = "";



  constructor(
    private translate: TranslateService,
    private global: GlobalService,
    private modalCtrl: ModalController
  ) {
  }

  selectQualitiesTiles(tile: Tile) {
    this.toggleTypeTile(tile);
    this.colorTiles()
    this.searchChord();
  }

  selectGradeTile(tile: Tile) {
    this.toggleGradeTile(tile);
    this.colorTiles()
    this.searchChord();
  }

  //select or deselect a tile
  toggleTypeTile(tile: Tile) {
    if (tile.selected == false) {
      this.qualitiesTiles.forEach(tile => {
        tile.selected = false;
      })
      tile.selected = true;
    } else {
      tile.selected = false;
    }
  }

  toggleGradeTile(tile: Tile) {

    if (tile.selected == false) {
      this.gradesTiles.forEach(tile => {
        tile.selected = false;
      })
      tile.selected = true;
    } else {
      tile.selected = false;
    }
  }

  searchbarChange(ev) {
    if (ev) {
      this.serVal = ev.target.value;
    }
  }

  //color the tiles if selected
  colorTiles() {

    this.qualitiesTiles.forEach(tile => {

      if (tile.selected) {
        tile.color = "secondary"
      }
      else {
        tile.color = "light"
      }
    })
    this.gradesTiles.forEach(tile => {

      if (tile.selected) {
        tile.color = "secondary"
      }
      else {
        tile.color = "light"
      }
    })
  }


  pushAll() {
    this.chords = [];
    ChordType.all().forEach(chord => {
      let tmpChord = new ChorderChord(this.key.trim() + chord.aliases[0])
      // console.log(tmpChord)

      this.chords.push(tmpChord)
    })
    // console.log(this.assembleChord(ChordType.all()[1].aliases[0]))
  }

  qualityFilter() {
    //if any qualitytile is selected, filter by quality

    //find the selected tile
    let tile = this.qualitiesTiles.find(tile => {
      return tile.selected == true;
    })

    if (tile) {
      this.chords = this.chords.filter(chord => {
        //if the selected quality is equal to the chord's quality returns che chord
        return chord.quality.includes(tile.name);
      })
    }

  }

  gradeFilter() {
    //if any gradetile is selected, filter by grade

    //find the selected tile
    let tile = this.gradesTiles.find(tile => {
      return tile.selected == true;
    })


    if (tile) {
      this.chords = this.chords.filter(chord => {
        //if the selected grade is equal to at least one of the intervals returns che chord
        let filtered = chord.intervals.symbols.some(symbol => {
          //-7 to get also the lower octave
          return symbol.slice(0, -1) == tile.name || symbol.slice(0, -1) == eval(tile.name + "-7");
        })

        return filtered;
      })
    }

  }

  getChords() {
    //if the searchbar is active
    if (this.serVal) {

      this.chords = this.chords.filter(chord => {
        //search in the aliases
        let isAlias = chord.aliases.some(alias => {
          console.log(alias, chord.quality, this.serVal)
          return alias.includes(this.serVal);
        })
        //search in the quality
        let isQuality = chord.quality.toLowerCase().includes(this.serVal.toLowerCase());

        return isAlias || isQuality
      })
    }

  }

  sortChords() {

    //remove the first chord which is empty
    this.chords = this.chords.filter(chord => {
      return chord.empty == false;
    })

    //sort in lenght order
    this.chords.sort((chord1, chord2) => chord1.symbol.length - chord2.symbol.length);
  }

  searchChord() {
    this.pushAll();

    this.qualityFilter();

    this.gradeFilter();

    this.getChords();

    this.sortChords();

  }


  inputChord(chordName) {

    let inputChord = new ChorderChord(chordName);
    //finds the bigger interval
    let interval = inputChord.intervals.symbols[inputChord.intervals.symbols.length - 1].slice(0, -1);

    //finds the tile with the correspondent value
    let qualityTile = this.qualitiesTiles.find(tile => {
      return tile.name == inputChord.quality;
    })
    let gradeTile = this.gradesTiles.find(tile => {
      return tile.name == interval;
    })

    //deselect all and then select the previusly found tiles
    this.gradesTiles.forEach(gradeTile => {
      gradeTile.selected = false;
    })
    this.qualitiesTiles.forEach(qualitiesTile => {
      qualitiesTile.selected = false;
    })
    if (qualityTile) { qualityTile.selected = true; }
    if (gradeTile) { gradeTile.selected = true; }

    this.colorTiles();

    //research for all chords and puts the input one at the top opened
    this.searchChord();

    this.chords.forEach((chord, idx) => {
      if (chord.symbol == inputChord.symbol) {
        this.chords.splice(idx, 1);
        this.chords.unshift(chord);
      }
    });

    this.chords[0].show = true;

    console.log(chordName, inputChord)
  }



  toggleEllipsis(parameter, chord) {

    switch (parameter) {
      case "extensions":
        if (chord.extensions.open) {
          chord.extensions.open = false;
        }
        else {
          chord.extensions.open = true;
        }
        break;

      case "reductions":
        if (chord.reductions.open) {
          chord.reductions.open = false;
        }
        else {
          chord.reductions.open = true;
        }
        break;
    }
  }



  beautify(array: string[], pipe: boolean = true) {
    let myString: string = '';

    switch (pipe) {

      case true:
        if (array) {
          array.forEach((element, idx) => {
            if (idx != 0 && idx != array.length) {
              if (element != "") {
                myString = myString + ", " + this.musicNotationPipe.transform(element);
              }
            }
            else {
              if (element != "") {
                myString = myString + this.musicNotationPipe.transform(element);
              }
            }

          })
          if (myString != "") {
            return myString;
          }
        }
        break;

      case false: array.forEach((element, idx) => {
        if (idx != 0 && idx != array.length) {
          if (element != "") {
            myString = myString + ", " + element;
          }
        }
        else {
          if (element != "") {
            myString = myString + element
          }
        }

      })
        if (myString != "") {
          return myString;
        }
    }
  }

  ngOnInit() {
    this.scale = ["", "Cb", "C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "Fb", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B", "B#"]
    let qualities = ["Major", "Minor", "Diminished", "Augmented"];
    let grades = ["5", "7", "9", "11", "13"]

    qualities.forEach(name => {
      this.qualitiesTiles.push({ name: name, color: "light", selected: false })
    });
    grades.forEach(name => {
      this.gradesTiles.push({ name: name, color: "light", selected: false })
    });

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: NotefinderModalComponent,
      cssClass: 'fullscreen'
    });
    await modal.present();
  }
}
