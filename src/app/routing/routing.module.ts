import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main/main.component';
import { RouteNames } from './route-names';

const main: Route = {
    path: RouteNames.Main,
    component: MainComponent,
    data: { title: 'Main' }
}

const routes: Routes = [main];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // include other modules here
  ],
  exports: [RouterModule],
  declarations: []
})

export class MainRoutingModule {}
