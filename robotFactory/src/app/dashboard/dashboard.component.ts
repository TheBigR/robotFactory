import { Component, OnInit } from '@angular/core';
import {Robot} from "../robot";
import {RobotService} from "../robot.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  robots: Robot[] = [];

  constructor(private robotService: RobotService) { }

  ngOnInit() {
    this.getRobots();
  }

  getRobots(): void {
    this.robotService.getRobots().subscribe(robots => this.robots = robots.slice(1,5));
  }

}
