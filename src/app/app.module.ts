import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root and Routing Root  */
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MateriaModule } from './material.module';

/* Feature Modules */
import { ShareModule } from './share.module';
import { PacientesModule } from './pacientes/pacientes.module';

/* Components */
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InfoViewComponent } from './components/info-view/info-view.component';
import { Error404Component } from './error-view/error404/error404.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { MenuComponent } from './menu/menu.component';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';

/* Pipes */
import { NameComponentPipe } from './pipes/name-component.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoViewComponent,
    Error404Component,
    MantenimientoComponent,
    SplashComponent,
    HomeComponent,
    MenuComponent,
    DashboardComponent,
    NavbarComponent,
    CardDashboardComponent,
    LayoutComponent,
    NameComponentPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MateriaModule,
    ShareModule,
    PacientesModule,
    AppRoutingModule
  ],
  exports: [
    BrowserAnimationsModule,
    MateriaModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
