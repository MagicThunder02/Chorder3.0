import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   imageUrl: '/assets/parrot.svg',
    //   icon: 'home-outline'
    // },
    {
      title: 'ChordMaker',
      url: '/chordmaker',
      imageUrl: '/assets/parrot.svg',
      color: 'chordmaker',
      icon: 'hammer-outline'
    },
    {
      title: 'Notefinder',
      url: '/notefinder',
      imageUrl: '/assets/parrot.svg',
      color: 'notefinder',
      icon: 'search-outline'
    },
    {
      title: 'home.metronome',
      url: '/metronome',
      imageUrl: '/assets/parrot.svg',
      color: 'metronome',
      icon: 'stopwatch-outline'
    },
    // {
    //   title: 'home.instrument',
    //   url: '/instrument',
    //   icon: 'musical-notes-outline'
    // },
    {
      title: 'home.options',
      url: '/options',
      imageUrl: '/assets/parrot.svg',
      color: 'options',
      icon: 'settings-outline'
    }
  ];

  constructor() { }
}
