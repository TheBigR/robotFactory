import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {Routes} from "@angular/router";
import {RobotsComponent} from "./robots/robots.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RobotDetailComponent} from "./robot-detail/robot-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: RobotDetailComponent},
  {path: 'robots', component: RobotsComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}




