import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarplotClockComponent } from './barplot-clock/barplot-clock.component';


const routes: Routes = [
  { path: '', component: BarplotClockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
