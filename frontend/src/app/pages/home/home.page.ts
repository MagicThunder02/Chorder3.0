import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['./home.page.scss'],

})

export class HomePage implements OnInit {
  appPages: any[];
  title: string;

  constructor(
    private translate: TranslateService,
    private cookie: CookieService,
    private menu: MenuService,
    private menuCtrl: MenuController
  ) {
    this.appPages = menu.appPages;
  }

  ionViewDidEnter(): void {
    this.translate.setDefaultLang('en');
    let lang = this.cookie.get('language');
    if (lang) {
      this.translate.use(lang);
    }
    /*     this.translate.get('title').subscribe((res: string) => {
          console.log(res);
          this.title = res;
        }); */
  }

  menuClick() {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
    console.log('hello ghito');

  }
}
