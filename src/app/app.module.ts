import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Angular Materials */
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';

/* Local components */
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChamadosComponent } from './components/chamados/chamados.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChamadoDetailComponent } from './components/chamado-detail/chamado-detail.component';
import { ChamadoInputComponent } from './components/chamado-input/chamado-input.component';
import { ApiService } from './services/api.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    MainComponent,
    DashboardComponent,
    ChamadosComponent,
    MessagesComponent,
    ChamadoDetailComponent,
    ChamadoInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatSidenavModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
