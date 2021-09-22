import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../pages/home/home.module';
import { HttpClient } from '@angular/common/http';
import { PipesModule } from '../pipes/pipes-module/pipes.module';
import { ChordComponent } from './chord/chord.component';
import { ChordmakerModalComponent } from './modals/chordmaker-modal/chordmaker-modal.component';
import { NotefinderModalComponent } from './modals/notefinder-modal/notefinder-modal.component';
import { MetronomeModalComponent } from './modals/metronome-modal/metronome-modal.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    ChordComponent,
    ChordmakerModalComponent,
    NotefinderModalComponent,
    MetronomeModalComponent,
    HeaderComponent
  ],
  exports: [
    ChordComponent,
    ChordmakerModalComponent,
    NotefinderModalComponent,
    MetronomeModalComponent,
    HeaderComponent
  ]
})
export class MyComponentsModule { }
