import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
//paginas

import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/pop-over/pop-over';
import { CategoriesPage } from '../pages/categories/categories';
import { SubcategoriesPage } from '../pages/subcategories/subcategories';
import { ServicesPage } from '../pages/services/services';
import { LoginPage  } from '../pages/login/login';
import { SignupPage  } from '../pages/signup/signup';

// Componentes
import {AppHeaderComponent} from '../components/app-header/app-header'

//Servicios
import { SubCategoryProvider } from '../providers/sub-category/sub-category';
import { CategoryProvider } from '../providers/category/category.service';
import { ServiceProvider } from '../providers/service/service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverPage,
    CategoriesPage,
    SubcategoriesPage,
    AppHeaderComponent,
    ServicesPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverPage,
    CategoriesPage,
    SubcategoriesPage,
    AppHeaderComponent,
    ServicesPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SubCategoryProvider,
    CategoryProvider,
    ServiceProvider
  ]
})
export class AppModule {}
