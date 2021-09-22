import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      imageUrl: '/assets/parrot.svg',
    },
    {
      title: 'ChordMaker',
      url: '/chordmaker',
      imageUrl: '/assets/red-bird-blob.svg',

    },
    {
      title: 'Notefinder',
      url: '/notefinder',
      imageUrl: '/assets/black-bird-blob.svg',

    },
    {
      title: 'home.metronome',
      url: '/metronome',
      imageUrl: '/assets/blue-bird-blob.svg',

    },

    {
      title: 'home.options',
      url: '/options',
      imageUrl: '/assets/pink-bird-blob.svg',

    }
  ];

  constructor() { }
}
