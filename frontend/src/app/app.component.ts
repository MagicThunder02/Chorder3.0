import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuService } from './services/menu.service';
import { GlobalService } from './services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { ViewPortService } from './services/viewport.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  appPages: any[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuService,
    private global: GlobalService,
    private translate: TranslateService,
    private viewport: ViewPortService
  ) {
    this.appPages = menu.appPages;

    this.initializeApp();

    //   this.viewportSubscription = this.navService.getNavChangeEmitter()
    //     .subscribe(item => this.selectedNavItem(item));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.translate.setDefaultLang('en');
    let lang = this.global.language;
    if (lang) {
      this.translate.use(lang);
    }
  }
}

