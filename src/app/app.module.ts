
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import {AuthentificationPage} from '../pages/authentification/authentification';
import {NewregisPage} from '../pages/newregis/newregis';
import {SettingsPage} from '../pages/settings/settings';
import {ModalPage} from '../pages/modal/modal';
import {ForgetPage} from '../pages/forget/forget';
import {ParentPage} from '../pages/parent/parent';
import {WelcomePage} from '../pages/welcome/welcome';
import 'rxjs/Rx'; 
import {FormGroup,FormsModule ,FormBuilder, FormControl,ReactiveFormsModule, Validators,AbstractControl} from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';
import { RequestProvider } from '../providers/request/request';
import { Network } from '@ionic-native/network';
import {RecentPage} from '../pages/recent/recent';
import {AboutPage} from '../pages/about/about';
import {InfoPage} from '../pages/info/info';
import {TimelinePage} from '../pages/timeline/timeline';
import {AddquestPage} from '../pages/addquest/addquest';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ListPage,InfoPage,TimelinePage,
    NewregisPage,ParentPage,WelcomePage,AboutPage,AddquestPage,
    AuthentificationPage,SettingsPage,RecentPage,ForgetPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
    tabsPlacement: 'top',
  platforms: {
    android: {
      tabsPlacement: 'top'
    },
    ios: {
      tabsPlacement: 'top'
    },
    windows:
    {
      tabsPlacement: 'top'
    }
  }
 }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,AddquestPage,
    HomePage,InfoPage,TimelinePage,
    ListPage,AuthentificationPage,
    NewregisPage,ParentPage,WelcomePage,
    SettingsPage,RecentPage,ForgetPage,AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,NativeAudio,
    RequestProvider,Network,IonicStorageModule 
  ]
})
export class AppModule {}
