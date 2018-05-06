import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RobotsComponent } from './robots/robots.component';
import { RobotDetailComponent } from './robot-detail/robot-detail.component';
import {RobotService} from "./robot.service";


@NgModule({
  declarations: [
    AppComponent,
    RobotsComponent,
    RobotDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RobotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
