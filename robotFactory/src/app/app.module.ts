import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RobotsComponent } from './robots/robots.component';
import { RobotDetailComponent } from './robot-detail/robot-detail.component';
import {RobotService} from "./robot.service";
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from "./message.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RobotsComponent,
    RobotDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RobotService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
