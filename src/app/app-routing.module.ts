import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * Fetch
 * Promisses
 * HttpClient
 * 
 * Then
 * Catch
 * 
 * Pesquisar sobre API
 */
